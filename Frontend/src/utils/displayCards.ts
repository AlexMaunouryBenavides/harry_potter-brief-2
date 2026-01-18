import type { Characters } from "../types/Characters";
import createCard from "../utils/createCard.js";
export default function displayCards(characters: Characters[]): void {
  const container = document.getElementById("characterCardContainer");

  if (container) {
    container.innerHTML = "";
    container.innerHTML = characters.map((character) => createCard(character)).join("");
  }
}
