/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Linking } from 'react-native';
import { Container } from '../../pages/OrderDetails/styles';
import { Order } from '../../@types';
import OrdersCard from '../../components/OrdersCard';
import Button from '../../components/Button';
import { confirmOrder } from '../../api';
import GoBackArrow from '../../components/GoBackArrow';

interface Props {
  route: {
    params: {
      order: Order;
    }
  }
}

function OrderDetails({ route }: Props) {
  const { order } = route.params;
  const navigation = useNavigation();

  const handleStartNavigation = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`);
  };

  const hadleConfirmOrder = () => {
    confirmOrder(order.id)
      .then(() => {
        Alert.alert(`Confirmada a entrega do pedido ${order.id}! 🛵`);
        navigation.goBack();
      }).catch(() => {
        Alert.alert(`Ouve um erro ao confirmar o pedido ${order.id}!❌🛵`);
      });
  };

  return (
    <Container>
      <GoBackArrow />
      <OrdersCard order={order} />
      <Button onPress={handleStartNavigation}>INICIAR NAVEGAÇÃO</Button>
      <Button onPress={hadleConfirmOrder}>CONFIRMAR ENTREGA</Button>
    </Container>
  );
}

export default OrderDetails;
