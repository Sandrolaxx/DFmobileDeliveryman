export type ProductInfo = {
  'product': Product;
  'quantity': number;
}

export type Product = {
    'id': number;
    'name': string;
    'price': number;
    'description': string;
    'imageUri': string;
  }

export type Order = {
  'orderId': number;
  'street': string;
  'latitude': number;
  'longitude': number;
  'orderStatus': string;
  'total': number;
  'payType': string;
  'orderDate': string;
  'productsOrder': ProductInfo[];
}

declare module '*.png';
