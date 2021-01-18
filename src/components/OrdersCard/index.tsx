/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import dayjs from 'dayjs';
import { Order } from '../../@types';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  Container, CardText, CardHeader, CardOrderName, CardOrderPrice, CardProductList,
} from './styles';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

interface Props {
  order: Order;
}

function dateFromNow(date: string) {
  return dayjs(date).fromNow();
}

function formatPrice(price: number) {
  const formatedPrice = price.toFixed(2)
    .replace('', 'R$ ')
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  return formatedPrice;
}

function OrdersCard({ order }: Props) {
  return (
    <Container>
      <CardHeader>
        <CardOrderName>PEDIDO {order.id}</CardOrderName>
        <CardOrderPrice>{formatPrice(order.total)}</CardOrderPrice>
      </CardHeader>
      <CardText>{dateFromNow(order.moment)}</CardText>

      <CardProductList>
        {order.products.map((product) => (
          <CardText key={product.id}>{product.name}</CardText>
        ))}
      </CardProductList>
    </Container>
  );
}

export default OrdersCard;
