import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";
import { Order } from "../../@types";
import { enumOrderParser, formatPrice } from "../utils/utils";
import {
    CardHeader, CardLine, CardOrderName, CardOrderPrice,
    CardProductList, CardText, Container
} from "./styles";

dayjs.locale("pt-br");
dayjs.extend(relativeTime);

interface Props {
    order: Order;
}

export default function OrdersCardDetail({ order }: Props) {
    const splitDate = new Date(order.orderDate).toLocaleDateString().split("/", 3);
    const paymentDate = splitDate[1] + "/" + splitDate[0] + "/" + splitDate[2];
    const paymentHour = new Date(order.orderDate).toLocaleTimeString();

    return (
        <Container>
            <CardHeader>
                <CardOrderName>PEDIDO {order.orderId}</CardOrderName>
                <CardOrderPrice>{formatPrice(order.total)}</CardOrderPrice>
            </CardHeader>
            <CardText>{dayjs(order.orderDate).fromNow()}</CardText>
            <CardProductList>
                {order.productsOrder.map((productOrder) => (
                    <CardText key={productOrder.product.id}>
                        {productOrder.product.name} x {productOrder.quantity}
                    </CardText>
                ))}
            </CardProductList>
            <CardLine />
            <CardText>STATUS PEDIDO: {enumOrderParser(order.orderStatus)}</CardText>
            <CardText>DATA PAGAMENTO: {paymentDate} as {paymentHour}</CardText>
            <CardText>TIPO PAGAMENTO: {order.payType}</CardText>
            <CardText>NOME CLIENTE: {order.clientName.toUpperCase()}</CardText>
            <CardLine />
            <CardText>BAIRRO: {order.district.toUpperCase()} </CardText>
            <CardText>RUA: {order.street.toUpperCase()} </CardText>
            <CardText>Nº: {order.number} </CardText>
            <CardText>{order.numberAp != null ? "Nº App: " + order.numberAp : ""} </CardText>
            <CardText>VALOR ENTREGA: {formatPrice(order.deliveryValue)}</CardText>
        </Container>
    );
}