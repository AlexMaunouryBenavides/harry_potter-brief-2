import Character from "../Entities/CharacterEntity.js";
import { CharacterRepository } from "../repositories/CharacterRepository.js";
const characterRepository = new CharacterRepository();
export default class CharacterController {
    static async read(req, res) {
        try {
            const characters = await characterRepository.findAll();
            res.status(200).json(characters);
        }
        catch (error) {
            res.status(500).json({ message: 'Erreur de lecture' });
        }
    }
    static async create(req, res) {
        try {
            const data = {
                "id": "15e9f7ce4-b3a7-4254-b885-dae5c1f1d4a8",
                "name": "Test Test",
                "alternate_names": [
                    "The Boy Who Lived",
                    "The Chosen One",
                    "Undesirable No. 1",
                    "Potty"
                ],
                "species": "human",
                "gender": "male",
                "house": "Gryffindor",
                "dateOfBirth": "31-07-1980",
                "yearOfBirth": 1980,
                "wizard": true,
                "ancestry": "half-blood",
                "eyeColour": "green",
                "hairColour": "black",
                "wand": {
                    "wood": "holly",
                    "core": "phoenix tail feather",
                    "length": 11
                },
                "patronus": "stag",
                "hogwartsStudent": true,
                "hogwartsStaff": false,
                "actor": "Daniel Radcliffe",
                "alternate_actors": [],
                "alive": true,
                "image": "https://ik.imagekit.io/hpapi/harry.jpg"
            };
            const newCharacter = new Character(data.id, data.name, data.alternate_names, data.species, data.gender, data.house, data.dateOfBirth, data.yearOfBirth, data.wizard, data.ancestry, data.eyeColour, data.hairColour, data.wand, data.patronus, data.hogwartsStudent, data.hogwartsStaff, data.actor, data.alternate_actors, data.alive, data.image);
            await characterRepository.post(newCharacter);
            res.status(201).json(newCharacter);
        }
        catch (error) {
            res.status(400).json({ message: 'Création impossible du personnage' });
        }
    }
    static async update(req, res) {
        try {
            const idToEdit = "15e9f7ce4-b3a7-4254-b885-dae5c1f1d4a8";
            const dataToEdit = {
                "name": "Toto Toto",
                "alternate_names": [
                    "The Boy Who Lived",
                    "The Chosen One",
                    "Undesirable No. 1",
                    "Potty"
                ],
                "species": "human",
                "gender": "male",
                "house": "Gryffindor",
                "dateOfBirth": "31-07-1980",
                "yearOfBirth": 1980,
                "wizard": true,
                "ancestry": "half-blood",
                "eyeColour": "green",
                "hairColour": "black",
                "wand": {
                    "wood": "holly",
                    "core": "phoenix tail feather",
                    "length": 11
                },
                "patronus": "stag",
                "hogwartsStudent": true,
                "hogwartsStaff": false,
                "actor": "Daniel Radcliffe",
                "alternate_actors": [],
                "alive": true,
                "image": "https://ik.imagekit.io/hpapi/harry.jpg"
            };
            const updatedData = await characterRepository.updateById(idToEdit, dataToEdit);
            res.status(200).json(updatedData);
        }
        catch (error) {
            res.status(400).json({ message: 'Update impossible' });
        }
    }
    static async delete(req, res) {
        try {
            const idToDelete = "15e9f7ce4-b3a7-4254-b885-dae5c1f1d4a8";
            await characterRepository.deleteById(idToDelete);
            res.status(200).json('Le personnage à bien été supprimé.');
        }
        catch (error) {
            res.status(400).send({ message: 'Suppression impossible' });
        }
    }
}
//# sourceMappingURL=CharacterController.js.map