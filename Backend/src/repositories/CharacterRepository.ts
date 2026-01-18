import path from "node:path";
import fs from "node:fs/promises";


export class CharacterRepository {

    // récupère le chemin depuis le package.json qu'on concatène avec le dossier data et le fichier data.json
    private filePath = path.join(process.cwd(), 'data', 'data.json');

    // Lit tout les personnages
    async findAll() {
        try {
            const response = await fs.readFile(this.filePath, 'utf-8');
            const characters = JSON.parse(response);
            return characters;
        } catch (error) {
            throw new Error(`Impossible de lire le fichier à l\'adresse suivante : , ${this.filePath}`);
        }
    }

    async findOneById(idToDisplay: string){
        try {
            const response = await fs.readFile(this.filePath, 'utf-8');
            const characters = JSON.parse(response);

            const result= [];
            for(let i=0; i<characters.length; i++){
                if(characters[i].id === idToDisplay){
                    result.push(characters[i]);
                }
            }
            return result; 
        } catch (error) {
            throw new Error('Impossible de lire le fichier !')
        }
    }

    // Crée un personnage 
    async post(data: Object) {
        try {

            // lis le json file
            const response = await fs.readFile(this.filePath, 'utf-8');
            const characters = JSON.parse(response);

            // push les new datas dans le json
            characters.push(data);

            // réécris le file
            this.save(characters);

            return data;

        } catch (error) {
            throw new Error('Impossible de créer un personnage')
        }
    }

    // Met à jour les données d'un personnage selon l'ID
    async updateById(idToEdit: string, data: Object) {
        try {
            const response = await fs.readFile(this.filePath, 'utf-8');
            const characters = JSON.parse(response);


            for (let i = 0; i < characters.length; i++) {
                if (characters[i].id === idToEdit) {
                    // On remplace le personnage à la position [i] par un nouvelle objet
                    characters[i] = {
                        // Copie toutes les propriétés du currentUser 
                        ...characters[i],
                        // on remplace par les nouvelles data
                        ...data,
                    };
                }
            }

            this.save(characters);

            return characters;
        } catch (error) {
            throw new Error('Impossible de mettre les données à jour')
        }
    }

    // Supprime un personnage selon son ID
    async deleteById(idToDelete: string) {
        try {
            const response = await fs.readFile(this.filePath, 'utf-8');
            const characters = JSON.parse(response);

            // Création d'un nouveau tableau qui contiendra les données qui ne seront pas supprimé
            let newArray = [];

            for (let i = 0; i < characters.length; i++) {
                if (characters[i].id !== idToDelete) {
                    newArray.push(characters[i])
                } else {
                    console.log('element supprimé !')
                }
            }
            
            this.save(newArray);
        } catch (error) {
            throw Error('Impossible de supprimer les données demandées')
        }
    }

    // Réécris les données dans le fichier JSON 
    async save(element: Object) {
        await fs.writeFile(
            this.filePath,
            // transforme les données en objet
            JSON.stringify(element, null, 2),
            'utf-8'
        );
    }
}
