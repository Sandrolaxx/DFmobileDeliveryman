/* eslint-disable import/prefer-default-export */
import { RectButton } from "react-native-gesture-handler";
import styled from "../../../node_modules/styled-components/native";

export const Container = styled(RectButton)`
    height: 50px;
    margin-right: 10%;
    margin-left: 10%;
    background: #56CFE1;
    border-radius: 15px;

    justify-content: center;
    align-items: center;
    margin-top: 10%;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-family: "RobotoMono-Bold";
    font-size: 20px;
`;
