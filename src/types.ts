export interface Product {
  id: number;
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
