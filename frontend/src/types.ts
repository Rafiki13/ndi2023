export interface Answer {
    content: string,
    isCorrect: boolean,
    textIfSelected: string,
    imageName: string,
    spriteName: string
}

export interface Question {
    theme: string,
    content: string,
    imageSrc: string,
    possibleAnswers: Answer[],
    pointsIfCorrect: number,
    pointsIfWrong: number
}
