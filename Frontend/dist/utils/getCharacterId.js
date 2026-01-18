export default function getCharacterId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}
//# sourceMappingURL=getCharacterId.js.map