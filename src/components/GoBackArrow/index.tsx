import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Container, GoBackImg } from "./styles";

function GoBackArrow() {
    const navigation = useNavigation();
    const arrowBack = require("../../assets/icons/arrow.png");

    const hadleGoBack = () => {
        navigation.goBack();
    };

    return (
        <Container>
            <TouchableWithoutFeedback onPress={hadleGoBack}>
                <GoBackImg source={arrowBack} />
            </TouchableWithoutFeedback>
        </Container>
    );
}

export default GoBackArrow;
