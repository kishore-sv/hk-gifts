// rating type
export type Rating = {
    id: number;
    name: string;
    rating: number; // 1–5 (can be decimal like 4.5)
    description: string;
    date: string; // ISO format recommended
};

export type ProductTag = "best-seller" | "new-arrivals" | "trending";

export type Product = {
    id: number;
    name: string;
    images: string[];
    price: number;
    tag: ProductTag;
    ratings: Rating[];
    product_details: string[];
};