import path from "node:path";
import fs from "node:fs/promises";
export class CharacterRepository {
    // Get the path since the package.json in the data folder + name file;
    filePath = path.join(process.cwd(), 'data', 'data.json');
    // read method
    async read() {
        try {
            const response = await fs.readFile(this.filePath, 'utf-8');
            const characters = JSON.parse(response);
            return characters;
        }
        catch (error) {
            throw new Error(`Impossible de lire le fichier à l\'adresse suivante : , ${this.filePath}`);
        }
    }
    // create method
    async create(data) {
        try {
            // lis le json file
            const response = await fs.readFile(this.filePath, 'utf-8');
            const characters = JSON.parse(response);
            // push les new datas dans le json
            characters.push(data);
            // réécris le file
            this.save(characters);
            return data;
        }
        catch (error) {
            throw new Error('Impossible de créer un personnage');
        }
    }
    // update method
    async update(idToEdit, data) {
        try {
            const response = await fs.readFile(this.filePath, 'utf-8');
            const characters = JSON.parse(response);
            for (let i = 0; i < characters.length; i++) {
                if (characters[i].id === idToEdit) {
                    characters[i] = {
                        ...characters[i],
                        ...data,
                    };
                }
            }
            this.save(characters);
            return characters;
        }
        catch (error) {
            throw new Error('Impossible de mettre les données à jour');
        }
    }
    // delete method
    async delete(idToDelete) {
        try {
            const response = await fs.readFile(this.filePath, 'utf-8');
            const characters = JSON.parse(response);
            let newArray = [];
            for (let i = 0; i < characters.length; i++) {
                if (characters[i].id !== idToDelete) {
                    newArray.push(characters[i]);
                }
                else {
                    console.log('element supprimé !');
                }
            }
            this.save(newArray);
            return characters;
        }
        catch (error) {
            throw Error('Impossible de supprimer les données demandées');
        }
    }
    // save method
    async save(element) {
        await fs.writeFile(this.filePath, JSON.stringify(element, null, 2), 'utf-8');
    }
}
//# sourceMappingURL=CharacterRepository.js.map