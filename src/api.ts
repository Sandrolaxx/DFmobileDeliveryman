import axios from "axios";
import {
    QUARKUS_USERNAME, QUARKUS_PASSWORD, QUARKUS_BASE_MARKETPLACE,
    QUARKUS_AUTHENTICATION, QUARKUS_AUTH
} from "@env";
import { OrderStatus } from "./@types/types";

export async function fetchOrders() {

    const token: string = await generateToken(QUARKUS_USERNAME, QUARKUS_PASSWORD);
    const api = axios.create({ baseURL: QUARKUS_BASE_MARKETPLACE });

    return api.get("/dona-frost/v1/order", {
        headers: {
            orderStatus: OrderStatus.AWAITING_DELIVERY,
            authorization: `Bearer ${token}`
        }
    })
    .then(res => res);
    
}

export async function changeOrderStatus(status: OrderStatus, orderId: number) {

    const token: string = await generateToken(QUARKUS_USERNAME, QUARKUS_PASSWORD);
    const api = axios.create({ baseURL: QUARKUS_BASE_MARKETPLACE });

    return api.put("/dona-frost/v1/order", {
        headers: {
            orderId: orderId,
            orderStatus: status,
            authorization: `Bearer ${token}`
        }
    }).catch(res => console.log(res));

}

export async function generateToken(username: string, password: string) {

    const qs = require("qs");
    const api = axios.create({ baseURL: QUARKUS_AUTHENTICATION });

    let token: string;

    await api.post("/openid-connect/token",
        qs.stringify({
            grant_type: "password",
            username: username,
            password: password,
        }), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            authorization: `Basic ${QUARKUS_AUTH}`,
        },
        withCredentials: false,
    })
    .then(res => token = res.data.access_token)
    .catch(() => token = "Erro ao gerar token de autenticação! Tente novamente.");

    return token!;

}