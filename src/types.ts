// Structure les données que l’on collecte lors d’un signalement

export type Signalement = {
    date: string;
    plateforme: string;
    url: string;
    // Type d’infraction signalée
    // Les valeurs sont limitées à 4 types :
    type: 'exemple d\'infractions : https://www.esiee-it.fr/fr/cybermalveillance-top-10-des-infractions-numeriques'; // (EXEMPLE D'INFRACTIONS)
    // Description libre : contexte, informations complémentaires, captures (texte)
    description: string;
  };  