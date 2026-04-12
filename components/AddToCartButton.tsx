"use client";

import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

type Props = {
    className?: string
    product: Product;
};

export default function AddToCartButton({ className, product }: Props) {
    const { addToCart } = useCart();

    const handleAdd = () => {
        addToCart(product);
    };

    return (
        <Button
            variant="outline"
            size="sm"
            className={cn("cursor-pointer", className)}
            onClick={handleAdd}
        >
            <Plus className="mr-1" /> Add To Cart
        </Button>
    );
}