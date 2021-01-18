/* eslint-disable import/prefer-default-export */
import { ScrollView } from 'react-native-gesture-handler';
import styled from '../../../node_modules/styled-components/native';

export const Container = styled(ScrollView)`
    padding-right: 2%;
    padding-left: 2%;
`;

export const LoadingText = styled.Text`
    font-size: 28px;
    text-align:center;
    line-height: 500px;
    letter-spacing: -0.24px;
    color: #4EA8DE;    
    font-family: 'Roboto-Bold';
`;
