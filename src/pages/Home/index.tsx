import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
    Container, TextTitle, TextSubTitle, DeliverImage,
} from "./styles";
import Button from "../../components/Button";

export default function Home() {
    const navigation = useNavigation();
    const deliveryImage = require("../../assets/Images/deliverman.png");

    function handleOnPress() {
        navigation.navigate("Orders");
    };

    return (
        <Container>
            <DeliverImage source={deliveryImage} />
            <TextTitle>
                Acompanhe os pedidos
                {"\n"}
                e
                {"\n"}
                entregue no prazo.
            </TextTitle>
            <TextSubTitle>
                Receba todos os pedidos do
                {"\n"}
                restaurante na palma da mão
            </TextSubTitle>
            <Button onPress={() => handleOnPress()}>
                VER PEDIDOS
            </Button>
        </Container>
    );
}

