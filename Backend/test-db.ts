import { CharacterRepository } from './src/repositories/CharacterRepository.js';

const repository = new CharacterRepository();

async function readTest() {
    console.log("--- Début du test ---");
    try {
        const characters = await repository.findAll();
        console.log(`Nombre de perso : ${characters.length}`);
        // console.log(characters);
    } catch (error: any) {
        console.error("Echec du test : ", error.message);
    }
}

async function createTest() {
    try {
        const characters = await repository.post(
            {
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
            },
        );
        console.log(characters);
    } catch (error) {
        throw Error('Impossible de créer un nouveau personnage');
    }
}

async function updateTest() {
    try {
        const idToEdit = "15e9f7ce4-b3a7-4254-b885-dae5c1f1d4a8";
        const newData = {
            "id": "15e9f7ce4-b3a7-4254-b885-dae5c1f1d4a8",
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
        const characters = await repository.updateById(idToEdit, newData);
        console.log(characters);
    } catch (error) {

    }
}

async function deleteTest() {
    try {
        const idToDelete = "15e9f7ce4-b3a7-4254-b885-dae5c1f1d4a8";
        const characters = await repository.deleteById(idToDelete);
        console.log(characters);
    } catch (error) {

    }
}

// readTest();
// createTest();
// updateTest();
// deleteTest();