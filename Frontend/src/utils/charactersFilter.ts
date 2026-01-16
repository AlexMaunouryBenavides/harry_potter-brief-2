import type { Characters } from "../types/Characters";

export default function characterFilter(data: Characters[], inputValue: string) {
  return data.filter((item) => {
    return (
      item.name.toLowerCase().includes(inputValue) ||
      item.species.toLowerCase().includes(inputValue) ||
      item.house.toLowerCase().includes(inputValue)
    );
  });
}
