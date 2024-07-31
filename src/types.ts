export interface Product {
    name: string;
    price: number;
    description: string;
    categories: {
      family: string;
      color: string;
    };
    quantity_in_stock: number;
}

export interface ContextType {
    products: Product[];
    isLoading: boolean;
    error: string | null;
    images: { [key: string]: string | null };
}

export interface ProductCardProps {
    product: Product;
    imageSrc: string;
}
