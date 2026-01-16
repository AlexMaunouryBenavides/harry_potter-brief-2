export default function characterFilter(data, inputValue) {
    return data.filter((item) => {
        return (item.name.toLowerCase().includes(inputValue) ||
            item.species.toLowerCase().includes(inputValue) ||
            item.house.toLowerCase().includes(inputValue));
    });
}
//# sourceMappingURL=charactersFilter.js.map