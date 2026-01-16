import Character from "../Entities/CharacterEntity.js";
import { CharacterRepository } from "../repositories/CharacterRepository.js";
import { Request, response, Response } from "express";


const characterRepository = new CharacterRepository();

export default class CharacterController {


    static async read(req: Request, res: Response) {
        try {
            const characters = await characterRepository.findAll();
            res.status(200).json(characters);
        } catch (error) {
            res.status(500).json({ message: 'Erreur de lecture' });
        }
    }

    static async readOne(req: Request, res: Response){
        try {
            const idToDisplay = req.params.id as string;
            const character= await characterRepository.findOneById(idToDisplay);
            res.status(200).json(character);
        } catch (error) {
            res.status(500).json({message: 'Erreur de lecture'});
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const data = req.body;

            const newCharacter = new Character(
                data.id,
                data.name,
                data.alternate_names as unknown as [string],
                data.species,
                data.gender,
                data.house,
                data.dateOfBirth,
                data.yearOfBirth,
                data.wizard,
                data.ancestry,
                data.eyeColour,
                data.hairColour,
                data.wand,
                data.patronus,
                data.hogwartsStudent,
                data.hogwartsStaff,
                data.actor,
                data.alternate_actors as unknown as [string],
                data.alive,
                data.image
            );

            await characterRepository.post(newCharacter);

            res.status(201).json(newCharacter);
        } catch (error) {
            res.status(400).json({ message: 'Création impossible du personnage' });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const idToEdit = req.params.id as string;
            const dataToEdit =req.body;

            const updatedData = await characterRepository.updateById(idToEdit, dataToEdit);

            res.status(200).json(updatedData);
        } catch (error) {
            res.status(400).json({ message: 'Update impossible' });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const idToDelete = req.params.id as string;
            
            await characterRepository.deleteById(idToDelete);


            res.status(200).json('Le personnage à bien été supprimé.');
        } catch (error) {
            res.status(400).send({ message: 'Suppression impossible' });
        }
    }
}
