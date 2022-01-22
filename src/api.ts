import axios from 'axios';

const API_URL = 'http://192.168.1.5:8082';

export function fetchOrders() {
  return axios(`${API_URL}/orders`);
}

export function confirmOrder(idOrder: number) {
  return axios.put(`${API_URL}/orders/${idOrder}/delivered`);
}
