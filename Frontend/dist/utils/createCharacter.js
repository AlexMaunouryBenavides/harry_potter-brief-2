export default function createCharacter(character) {
    return `
  <img class="w-64 md:w-80" src="${character.image}" alt="character image" />

          <div class="bg-[#0b0f14] p-8 max-w-xl text-[#d6cbbf]">
            <div class="flex-col space-y-4 text-lg">
              <div class="flex gap-2">
                <span class="text-orange-500 font-semibold">Name :</span>
                <span>${character.name}</span>
              </div>

              <div class="flex gap-2">
                <span class="text-orange-500 font-semibold">Surname :</span>
                <span>${character.alternate_names} </span>
              </div>

              <div class="flex gap-2">
                <span class="text-orange-500 font-semibold">Species :</span>
                <span>${character.species}</span>
              </div>

              <div class="flex gap-2">
                <span class="text-orange-500 font-semibold">House :</span>
                <span>${character.house}</span>
              </div>

              <div class="flex gap-2">
                <span class="text-orange-500 font-semibold">Hogward Student :</span>
                <span>${character.hogwartsStudent}</span>
              </div>

              <div class="flex gap-2">
                <span class="text-orange-500 font-semibold">Ancestry :</span>
                <span>${character.ancestry}</span>
              </div>

              <div class="flex gap-4 items-start">
                <span class="text-orange-500 font-semibold">Wand:</span>
                <ul class="list-disc ml-4 space-y-1">
                  <li>Wood : ${character.wand.wood} </li>
                  <li>Core : ${character.wand.core}</li>
                  <li>Length : ${character.wand.length}</li>
                </ul>
              </div>
            </div>
          </div>
    
    `;
}
//# sourceMappingURL=createCharacter.js.map