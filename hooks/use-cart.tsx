"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "@/types";

export type CartItem = {
    product: Product;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];

    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;

    increaseQty: (productId: number) => void;
    decreaseQty: (productId: number) => void;
    updateQty: (productId: number, qty: number) => void;

    clearCart: () => void;

    totalPrice: number;
    totalItems: number;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);


    useEffect(() => {
        try {
            const stored = localStorage.getItem("cart");
            if (stored) {
                setCart(JSON.parse(stored));
            }
        } catch {
            console.error("Invalid cart data in localStorage");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.product.id === product.id);

            if (exists) {
                return prev.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: number) => {
        setCart((prev) =>
            prev.filter((item) => item.product.id !== productId)
        );
    };

    const increaseQty = (productId: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.product.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQty = (productId: number) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.product.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const updateQty = (productId: number, qty: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.product.id === productId
                    ? { ...item, quantity: qty }
                    : item
            )
        );
    };

    const clearCart = () => setCart([]);

    const totalPrice = cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
    );

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQty,
                decreaseQty,
                updateQty,
                clearCart,
                totalPrice,
                totalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used inside CartProvider");
    }
    return context;
};