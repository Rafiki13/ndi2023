export interface Answer {
    content: string,
    isCorrect: boolean,
    textIfSelected: string,
    imageName: string,
    spriteName: string,
    description: string
}

export interface Question {
    theme: string,
    content: string,
    imageSrc: string,
    possibleAnswers: Answer[],
    pointsIfCorrect: number,
    pointsIfWrong: number
}

export interface RotatingEarthSprite {
    id: number;
    fichier: string;
    height: number;
    marginBottom: number;
}

export interface EarthListSprite {
    id: number;
    nom: string;
    fichier: string;
    description: string;
    height: number;
    marginBottom: number;
}