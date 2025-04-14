export type Meaning = {
    partOfSpeech: string
        definitions: [
            {
                definition: string,
                example: string,
                synonyms: [],
                antonyms: []
            }
        ];
        synonyms:[]
}

export type Result = {
    word: string,
    phonetic: string,
    phonetics: [
        {
            text: string,
            audio: string
        },
        {
            text: string;
        }
    ],
    origin: string,
    meanings: Meaning[]
}