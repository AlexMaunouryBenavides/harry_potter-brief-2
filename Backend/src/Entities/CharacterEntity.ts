
export default class Character {
    constructor(
        private id: string,
        private name: string,
        private alternate_names: [string],
        private species: string,
        private gender: string,
        private house: string,
        private dateOfBirth: string,
        private yearOfBirth: number,
        private wizard: boolean,
        private ancestry: string,
        private eyeColour: string,
        private hairColour: string,
        private wand: object,
        private patronus: string,
        private hogwartsStudent: boolean,
        private hogwartsStaff: boolean,
        private actor: string,
        private alternate_actors: [string],
        private alive: boolean,
        private image: string,
    ) { }
}