import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import { Container, ButtonText } from "./styles";

interface ButtonProps extends RectButtonProperties {
    children: string;
}

export default function Button({ children, ...rest }: ButtonProps) {
    return (
        <Container {...rest}>
            <ButtonText>{children}</ButtonText>
        </Container>
    );
}