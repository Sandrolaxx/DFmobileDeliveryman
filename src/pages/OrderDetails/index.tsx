import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, Linking } from "react-native";
import { Order, OrderStatus } from "../../@types/types";
import { changeOrderStatus } from "../../api";
import Button from "../../components/Button";
import GoBackArrow from "../../components/GoBackArrow";
import OrdersCardDetail from "../../components/OrdersCardDetail";
import { Container } from "../../pages/OrderDetails/styles";

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

    function handleStartNavigation() {
        changeOrderStatus(OrderStatus.IN_DELIVERY, order.orderId);

        Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`);
    };

    function hadleConfirmOrder() {
        changeOrderStatus(OrderStatus.FINISHED, order.orderId)
            .then(() => {
                Alert.alert(`Confirmada a entrega do pedido ${order.orderId}! 🛵`);
                navigation.goBack();
            })
            .catch(() => {
                Alert.alert(`Ouve um erro ao confirmar o pedido ${order.orderId}!❌🛵`);
            });
    };

    return (
        <Container>
            <GoBackArrow />
            <OrdersCardDetail order={order} />
            <Button onPress={handleStartNavigation}>INICIAR NAVEGAÇÃO</Button>
            <Button onPress={hadleConfirmOrder}>CONFIRMAR ENTREGA</Button>
        </Container>
    );
}

export default OrderDetails;
