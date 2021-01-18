/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StatusBar } from 'react-native';
import { Container, LogoDonaFrost, LogoText } from './styles';
import logo from '../../assets/icons/logo.png';

function Header() {
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

export default Header;
