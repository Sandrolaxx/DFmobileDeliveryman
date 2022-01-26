export function formatPrice(price: number) {
    return price.toFixed(2)
        .replace("", "R$ ")
        .replace(".", ",")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}