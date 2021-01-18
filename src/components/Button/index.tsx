/* eslint-disable indent *//* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading *//* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension *//* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions *//* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
    children: string;
}

function Button({ children, ...rest }: ButtonProps) {
    return (
        <Container {...rest}>
            <ButtonText>{children}</ButtonText>
        </Container>
    );
}

export default Button;
