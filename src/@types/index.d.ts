export type ProductInfo = {
  "product": Product;
  "quantity": number;
}

export type Product = {
    "id": number;
    "name": string;
    "price": number;
    "description": string;
    "imageUri": string;
  }

export type Order = {
  "orderId": number;
  "district": string;
  "street": string;
  "number": number;
  "numberAp": number;
  "latitude": number;
  "longitude": number;
  "orderStatus": string;
  "total": number;
  "payType": string;
  "orderDate": number;
  "clientName": string;
  "deliveryValue": number;
  "productsOrder": ProductInfo[];
}

declare module "*.png";
