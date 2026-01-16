import characterFilter from "./utils/charactersFilter.js";
import displayCards from "./utils/displayCards.js";
import fetchData from "./utils/fetchData.js";

async function init() {
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
