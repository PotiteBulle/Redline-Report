# Redline-Report

**Redline Report** est un outil de signalement automatisé conçu pour lutter contre les contenus dangereux en ligne (par exemple).  
Il permet aux activistes, modérateur·ices, ou cellules de veille de documenter un incident, d’enregistrer le signalement localement, et d’envoyer automatiquement une alerte à un salon Discord via Webhook.

---

## Fonctionnalités

- Interface CLI interactive pour remplir un signalement
- Sauvegarde dans un fichier `signalements.json`
- Envoi automatique d’une alerte dans un salon Discord (Webhook exemple)
- Basé sur Bun.js pour des performances optimisées

---

## Installation

1. Installe [Bun](https://bun.sh) si ce n’est pas déjà fait :
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. Clone le projet :
   ```bash
   git clone https://github.com/votre-utilisateur/redline-report.git
   cd redline-report
   ```

3. Installe les dépendances :
   ```bash
   bun install
   ```

4. Configure votre fichier `.env` :
   ```env
   DISCORD_WEBHOOK=https://discord.com/api/webhooks/xxxx/xxxxx
   ```

---

## Utilisation

Lancer le bot :
```bash
bun run src/index.ts
```

Répondez aux questions dans le terminal pour enregistrer un signalement.  
Il sera automatiquement sauvegardé dans `./signalements/signalements.json`  
et un message sera envoyé à votre Webhook Discord (exemple).

---

## Structure

```
redline-report/
├── signalements/           # Dossiers des signalements enregistrés
├── src/
│   ├── index.ts            # Fichier principal CLI
│   └── types.ts            # Définition des types TypeScript
├── .env.example            # Exemple de configuration
├── .gitignore              # Fichiers ignorés par git
└── README.md               # Documentation
```

---

## Avertissement

Redline Report est un outil **à vocation éthique & responsable**.  
Il ne remplace **ni la justice**, ni les services de Police ou Gendarmerie.  
En cas d’urgence ou de contenus illégaux explicites, **contactez immédiatement les autorités compétentes** ou [**Pharos**](https://www.internet-signalement.gouv.fr/PharosS1/).

---

## Licence

Ce projet est sous [licence **MIT**](https://github.com/PotiteBulle/Redline-Report/blob/main/LICENSE) – libre d’usage, modification et redistribution.  
Développé avec ❤️ par Potate
