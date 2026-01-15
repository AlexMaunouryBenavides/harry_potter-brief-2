// fetch depuis mon json
// injecter mes cards avec les données que j'ai fetch
interface Character {
  id: number;
  name: string;
  species: string;
  house: string;
  image: string;
}

async function fetchData(): Promise<Character[]> {
  const res = await fetch("../Data/data.json");
  if (!res.ok) throw new Error("Error went fetching data");
  const data: Character[] = await res.json();
  return data;
}

function createCard(character: Character): string {
  return `
    <div class="flex w-[300px] gap-10  bg-bluish-20 shadow-[7px_7px_15px_0px_rgba(100,126,148,0.2)]">
          <img class="h-full w-[50%] object-cover" src=${character.image} alt="profil" />
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

function displayCards(characters: Character[]): void {
  const container = document.getElementById("characterCardContainer");

  if (container) {
    container.innerHTML = characters.map((character) => createCard(character)).join("");
  }
}

async function init() {
  const characters = await fetchData();
  displayCards(characters);
}

init();
