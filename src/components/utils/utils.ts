import { OrderStatus } from "../../@types";

export function formatPrice(price: number) {
    return price.toFixed(2)
        .replace("", "R$ ")
        .replace(".", ",")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export function enumOrderParser(status: OrderStatus):string {
    switch (status) {
        case OrderStatus.AWAITING_DELIVERY:
            return "Aguardando Entrega";
        case OrderStatus.AWAITING_PAYMENT:
            return "Aguardando Pagamento";
        case OrderStatus.IN_DELIVERY:
            return "Realizando Entrega";
        case OrderStatus.FINISHED:
            return "Finalizado";
    }

}