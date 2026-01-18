import createCard from "../utils/createCard.js";
export default function displayCards(characters) {
    const container = document.getElementById("characterCardContainer");
    if (container) {
        container.innerHTML = "";
        container.innerHTML = characters.map((character) => createCard(character)).join("");
    }
}
//# sourceMappingURL=displayCards.js.map