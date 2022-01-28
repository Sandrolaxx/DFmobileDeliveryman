import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import {
    Container, CardText, CardHeader, CardOrderName, CardOrderPrice, CardProductList,
} from "./styles";
import { formatPrice } from "../utils/utils";
import { Order } from "../../@types/types";

dayjs.locale("pt-br");
dayjs.extend(relativeTime);

interface Props {
    order: Order;
}

export default function OrdersCard({ order }: Props) {
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
                        {productOrder.product.name} - {productOrder.quantity}
                    </CardText>
                ))}
            </CardProductList>
        </Container>
    );
}