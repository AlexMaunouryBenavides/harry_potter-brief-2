export default function getCharacterId(): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}
