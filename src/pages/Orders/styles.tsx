import { ScrollView } from "react-native";
import styled from "../../../node_modules/styled-components/native";

export const Container = styled(ScrollView)`
    padding-right: 2%;
    padding-left: 2%;
`;

export const LoadingText = styled.Text`
    font-size: 24px;
    text-align:center;
    padding-top: 55%;
    letter-spacing: -0.24px;
    color: #4EA8DE;    
    font-family: "Roboto-Bold";
`;

export const NoOrdersText = styled.Text`
    font-size: 24px;
    text-align:center;
    padding-top: 55%;
    letter-spacing: -0.24px;
    color: #4EA8DE;    
    font-family: "Roboto-Bold";
`;
