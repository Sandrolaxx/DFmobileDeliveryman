/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container, TextTitle, TextSubTitle, DeliverImage,
} from './styles';
import deliverman from '../../assets/Images/deliverman.png';
import Button from '../../components/Button';

function Home() {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Orders');
  };

  return (
    <Container>
      <DeliverImage source={deliverman} />
      <TextTitle>
        Acompanhe os pedidos
        {'\n'}
        e
        {'\n'}
        entregue no prazo!
      </TextTitle>
      <TextSubTitle>
        Receba todos os pedidos do
        {'\n'}
        restaurante na palma da mão
      </TextSubTitle>
      <Button onPress={() => handleOnPress()}>
        VER PEDIDOS
      </Button>
    </Container>
  );
}

export default Home;
