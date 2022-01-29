import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";
import { Order } from "../../@types/types";
import { fetchOrders } from "../../api";
import GoBackArrow from "../../components/GoBackArrow";
import OrdersCard from "../../components/OrdersCard";
import {
    Container,
    LoadingText,
} from "./styles";

export default function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        fetchData();
    }, [isFocused]);

    function fetchData() {
        return fetchOrders()
            .then(response => setOrders(response))
            .catch(() => Alert.alert("Houve um erro ao buscar os pedidos😕"))
            .finally(() => setIsLoading(false));
    }

    function handleOnPress(order: Order) {
        navigation.navigate("OrderDetails", { order });
    };

    return (
        <Container>
            <GoBackArrow />
            {isLoading ? (
                <LoadingText>Buscando pedidos...</LoadingText>
            ) : orders.map((order) => (
                <ScrollView
                    key={order.orderId}
                    onTouchEnd={() => handleOnPress(order)}
                >
                    <OrdersCard order={order} />
                </ScrollView>
            ))}
        </Container>
    );
}