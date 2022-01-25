export function formatPrice(price: number) {
    const formatedPrice = price.toFixed(2)
        .replace("", "R$ ")
        .replace(".", ",")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

    return formatedPrice;
}