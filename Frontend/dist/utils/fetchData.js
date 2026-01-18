export default async function fetchData(route) {
    const res = await fetch(route);
    if (!res.ok)
        throw new Error("Error went fetching data");
    const data = await res.json();
    return data;
}
//# sourceMappingURL=fetchData.js.map