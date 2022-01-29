import {
    QUARKUS_USERNAME, QUARKUS_PASSWORD, QUARKUS_BASE_MARKETPLACE,
    QUARKUS_AUTHENTICATION, QUARKUS_AUTH
} from "@env";
import { OrderStatus } from "./@types/types";

export async function fetchOrders() {

    const token: string = await generateToken(QUARKUS_USERNAME, QUARKUS_PASSWORD);
    const baseURL = QUARKUS_BASE_MARKETPLACE.concat("/dona-frost/v1/order");

    return fetch(baseURL, {
        method: 'GET',
        headers: {
            "orderStatus": OrderStatus.AWAITING_DELIVERY,
            "authorization": `Bearer ${token}`
        }
    })
    .then(res => res.json().then(res => res));

}

export async function changeOrderStatus(status: OrderStatus, orderId: number) {

    const token: string = await generateToken(QUARKUS_USERNAME, QUARKUS_PASSWORD);
    const baseURL = QUARKUS_BASE_MARKETPLACE.concat("/dona-frost/v1/order");

    if (token == null) {
        return null;
    }

    return fetch(baseURL, {
        method: 'PUT',
        headers: {
            "orderId": orderId.toString(),
            "orderStatus": status,
            "authorization": `Bearer ${token}`
        }
    });

}

export function generateToken(username: string, password: string) {

    const qs = require("qs");
    const baseUrl = QUARKUS_AUTHENTICATION.concat("/openid-connect/token");

    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            authorization: `Basic ${QUARKUS_AUTH}`,
        },
        body: qs.stringify({
            grant_type: "password",
            username: username,
            password: password,
        })
    })
    .then(res => {
        if (res.ok) {
        return res.json().then(res => res.access_token);
        } else {
            return null;
        }
    });

}