import type { Characters } from "../types/Characters";

export default async function fetchData(route: string | URL): Promise<Characters[]> {
  const res = await fetch(route);
  if (!res.ok) throw new Error("Error went fetching data");
  const data: Characters[] = await res.json();
  return data;
}
