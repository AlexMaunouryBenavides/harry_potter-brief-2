import characterFilter from "./utils/charactersFilter.js";
import displayCards from "./utils/displayCards.js";
import displayCharacter from "./utils/displayCharacter.js";
import fetchData from "./utils/fetchData.js";
import getCharacterId from "./utils/getCharacterId.js";

async function init() {
  const id = getCharacterId();
  if (id) {
    await displayCharacter(id);
    return;
  }
  const characters = await fetchData("https://harry-potter-brief-2.onrender.com/api/characters/");
  displayCards(characters);

  const input = document.querySelector<HTMLElement>("#filterInput");
  input?.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    const filtered = characterFilter(characters, value);

    displayCards(filtered);
  });
}

init();
