import type { Characters } from "./types/Characters";
import characterFilter from "./utils/charactersFilter.js";

async function fetchData(): Promise<Characters[]> {
  const res = await fetch("http://localhost:4000/api/characters/");
  if (!res.ok) throw new Error("Error went fetching data");
  const data: Characters[] = await res.json();
  return data;
}

function createCard(character: Characters): string {
  return `
    <div class="flex w-75 gap-10 bg-bluish-20 shadow-[7px_7px_15px_0px_rgba(100,126,148,0.2)]">
          <img class="h-full w-[50%] object-cover" src="${character.image}" alt="profil" />
          <div class="flex flex-col justify-center items-start gap-2.5">
            <div>
              <h3 class="font-aladin text-orangish text-[20px]">Name :</h3>
              <p class="font-carme text-[12px] text-orangish-50">${character.name}</p>
            </div>
            <div>
              <h3 class="font-aladin text-orangish text-[20px]">Species :</h3>
              <p class="font-carme text-[12px] text-orangish-50">${character.species}</p>
            </div>
            <div>
              <h3 class="font-aladin text-orangish text-[20px]">House :</h3>
              <p class="font-carme text-[12px] text-orangish-50">${character.house}</p>
            </div>
          </div>
        </div>
    `;
}

function displayCards(characters: Characters[]): void {
  const container = document.getElementById("characterCardContainer");

  if (container) {
    container.innerHTML = "";
    container.innerHTML = characters.map((character) => createCard(character)).join("");
  }
}

async function init() {
  const characters = await fetchData();

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
