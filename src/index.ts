// Mdules nécessaires
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import readline from 'readline';
import { config } from 'dotenv';
import type { Signalement } from './types';

config();

// Interface pour lire depuis la console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Petite fonction pour poser une question et retourner la réponse
function ask(question: string): Promise<string> {
  return new Promise(resolve => rl.question(question, resolve));
}

// Fonction principale qui gère tout le processus
async function run() {
  // On récupère les infos du signalement
  const plateforme = await ask("Plateforme concernée : ");
  const url = await ask("Lien exact du contenu : ");
  const type = await ask("Type infractions : ");
  const description = await ask("Description (Obligatoire) : ");

  // Création d’un objet de type Signalement
  const signalement: Signalement = {
    date: new Date().toISOString(),
    plateforme,
    url,
    type: type as Signalement["type"], // Type limité aux valeurs autorisées
    description
  };

  // Dossier et fichier cible
  const folder = './signalements';
  const file = `${folder}/signalements.json`;

  // Création du dossier s’il n’existe pas
  if (!existsSync(folder)) mkdirSync(folder);

  // Lecture de l'existant, ou création d'un tableau vide
  const data: Signalement[] = existsSync(file)
    ? JSON.parse(readFileSync(file, 'utf-8'))
    : [];

  // Ajout du nouveau signalement
  data.push(signalement);

  // Écriture dans le fichier JSON avec indentation
  writeFileSync(file, JSON.stringify(data, null, 2));

  console.log('\n Signalement enregistré avec succès.');

  // Si un webhook Discord est défini, on envoie une alerte
  if (process.env.DISCORD_WEBHOOK) {
    const res = await fetch(process.env.DISCORD_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `**Redline Report - Nouveau signalement**
    Plateforme : ${plateforme}
    Lien : ${url}
    Type : ${type}
    Description : ${description || 'aucune'}`
      })
    });

    if (res.ok) {
      console.log('Alerte envoyée sur auprès d`\ une équipe de moderation Discord.');
    } else {
      console.log('Échec de l’envoi du signalement.');
    }
  }

  // Fin du programme
  rl.close();
}

// Démarrage
run();