import React from "react";
import { StatusBar } from "react-native";
import { Container, LogoDonaFrost, LogoText } from "./styles";

export default function Header() {
    const logo = require("../../assets/icons/logo.png");

    return (
        <Container>
            <StatusBar translucent backgroundColor="#56cfe1" />
            <LogoDonaFrost source={logo} />
            <LogoText>
                DonaFrost Delivery
            </LogoText>
        </Container>
    );
}
