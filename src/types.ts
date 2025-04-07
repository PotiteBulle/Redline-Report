// Structure les données que l’on collecte lors d’un signalement

export type Signalement = {
    date: string;
    plateforme: string;
    url: string;
    // Type d’infraction signalée
    // Les valeurs sont limitées à 4 types :
    type: 'pédocriminalité' | 'grooming' | 'harcèlement' | 'autre';
    // Description libre : contexte, informations complémentaires, captures (texte)
    description: string;
  };  