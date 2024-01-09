export interface Product {
  nombre: string;
  precio: number;
  referencia: string;
  foto: string;
}

export interface CartProduct {
  product: Product;
  size: number;
  quantity: number;
}
