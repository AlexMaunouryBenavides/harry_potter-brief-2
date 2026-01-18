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
  const characters = await fetchData("http://localhost:4000/api/characters/");
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
