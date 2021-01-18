/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable indent */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Container, GoBackImg } from './styles';
import arrowBack from '../../assets/icons/arrow.png';

function GoBackArrow() {
    const navigation = useNavigation();

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
