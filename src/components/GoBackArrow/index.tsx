import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, GoBackImg } from "./styles";
import { Touchable, TouchableNativeFeedbackBase } from "react-native";

function GoBackArrow() {
    const navigation = useNavigation();
    const arrowBack = require("../../assets/icons/arrow.png");

    const hadleGoBack = () => {
        navigation.goBack();
    };

    return (
        <Container>
            <TouchableNativeFeedbackBase onPress={hadleGoBack}>
                <GoBackImg source={arrowBack} />
            </TouchableNativeFeedbackBase>
        </Container>
    );
}

export default GoBackArrow;
