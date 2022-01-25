import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 2%;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 6%;
    padding: 15px;
    background-color: #FFF;
    box-shadow: 10px 5px 5px #212121;
    border-radius: 10px;
    elevation: 6;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const CardText = styled.Text`
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.24px;
    color: #9E9E9E;
    font-family: "Roboto-Medium";
`;

export const CardOrderName = styled.Text`
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.24px;
    color: #263238;
    font-family: "Roboto-Bold";    
`;

export const CardOrderPrice = styled.Text`
    font-size: 18px;
    line-height: 25px;
    text-align: right;
    letter-spacing: -0.24px;
    color: #4EA8DE;    
    font-family: "Roboto-Bold";
`;

export const CardProductList = styled.View`
    border-top-color: #E6E6E6;
    border-top-width: 1px;
    margin-top: 20px;
    padding-top: 15px;
`;

export const CardLine = styled.View`
    border-top-color: #E6E6E6;
    border-top-width: 1px;
    margin-top: 15px;
    padding-top: 15px;
`;