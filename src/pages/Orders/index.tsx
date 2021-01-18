/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Order } from '../../@types';
import { fetchOrders } from '../../api';
import GoBackArrow from '../../components/GoBackArrow';
import OrdersCard from '../../components/OrdersCard';
import {
  Container,
  LoadingText,
} from './styles';

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const fetchData = () => {
    fetchOrders()
      .then((response) => setOrders(response.data))
      .catch(() => Alert.alert('Houve um erro ao buscar os pedidos :('))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails', { order });
  };

  return (
    <Container>
      <GoBackArrow />
      {isLoading ? (
        <LoadingText>Buscando pedidos...</LoadingText>
      ) : orders.map((order) => (
        <TouchableWithoutFeedback
          key={order.id}
          onPress={() => handleOnPress(order)}
        >
          <OrdersCard order={order} />
        </TouchableWithoutFeedback>
      ))}
    </Container>
  );
}

export default Orders;
