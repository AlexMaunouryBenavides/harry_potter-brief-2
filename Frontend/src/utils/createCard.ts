import type { Characters } from "../types/Characters";

export default function createCard(character: Characters): string {
  return `
  <a href="character.html?id=${character.id}">
        <div class=" card cursor-pointer flex w-75 gap-10 bg-bluish-20 shadow-[7px_7px_15px_0px_rgba(100,126,148,0.2)]">
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
  </a>
    
    `;
}
