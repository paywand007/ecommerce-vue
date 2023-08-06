export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images?: (string)[] | null;
}

export default interface ProductState {
    drawer: boolean;
    products: Product[]; // Use the Product interface for the products array
}
