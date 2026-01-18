import createCharacter from "./createCharacter.js";
import fetchData from "./fetchData.js";
export default async function displayCharacter(id) {
    const characters = await fetchData("https://harry-potter-brief-2.onrender.com/api/characters/");
    const character = characters.find((c) => String(c.id) === id);
    console.log(character);
    if (!character) {
        console.error("Aucun character trouvé pour l'id =", id);
        return;
    }
    const container = document.getElementById("characterSection");
    if (container) {
        container.innerHTML = "";
        container.innerHTML = createCharacter(character);
    }
}
//# sourceMappingURL=displayCharacter.js.map