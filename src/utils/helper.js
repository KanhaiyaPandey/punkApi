

export function filterData(searchText, products) {
    return  products.filter((product)=> product?.name.toLowerCase()?.includes(searchText.toLowerCase()))
}