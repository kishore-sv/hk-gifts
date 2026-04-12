"use client";

import { Button } from "./ui/button";
import { Gift, ShoppingCart } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "./ui/empty";
import { RainbowButton } from "./ui/rainbow-button";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import Link from "next/link";
import { sendFullWhatsAppOrder } from "@/helpers/whatsapp";

export default function CartButton() {
    const [open, setOpen] = useState(false);

    const {
        cart,
        totalItems,
        totalPrice,
        increaseQty,
        decreaseQty,
        updateQty,
        removeFromCart,
    } = useCart();

    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                variant="outline"
                className="cursor-pointer relative"
            >
                {totalItems > 0 && (
                    <Badge className="absolute -top-3 -right-2">
                        {totalItems}
                    </Badge>
                )}
                <ShoppingCart />
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="min-h-[60vh] min-w-[60vw] z-99999999">
                    <DialogHeader>
                        <DialogTitle>Cart</DialogTitle>
                        <DialogDescription>
                            {cart.length === 0
                                ? "Your cart is empty."
                                : `You have ${totalItems} items`}
                        </DialogDescription>
                    </DialogHeader>

                    {cart.length === 0 ? (
                        <Empty>
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                    <Gift />
                                </EmptyMedia>
                                <EmptyTitle>No Items in Cart</EmptyTitle>
                                <EmptyDescription>
                                    Add something first instead of opening an empty cart.
                                </EmptyDescription>
                            </EmptyHeader>
                            <EmptyContent className="flex-row justify-center gap-2">
                                <Link href="/collections/all-products" onClick={() => setOpen(false)}>
                                    <RainbowButton className="cursor-pointer">Shop Now</RainbowButton>
                                </Link>
                            </EmptyContent>
                        </Empty>
                    ) : (
                        <>

                            <div className="flex flex-col h-full max-h-[55vh]">
                                <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-4">
                                    {cart.map((item) => (
                                        <div
                                            key={item.product.id}
                                            className="flex items-center justify-between border p-3 rounded-lg"
                                        >
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={item.product.images[0]}
                                                    alt={item.product.name}
                                                    className="w-14 h-14 object-cover rounded"
                                                />
                                                <div>
                                                    <p className="font-medium">{item.product.name}</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        ₹{item.product.price}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">

                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="cursor-pointer"
                                                    onClick={() => decreaseQty(item.product.id)}
                                                >
                                                    -
                                                </Button>

                                                <input
                                                    type="number"
                                                    min={1}
                                                    value={item.quantity}
                                                    onChange={(e) => {
                                                        const value = Number(e.target.value);

                                                        if (value < 1 || isNaN(value)) return;

                                                        updateQty(item.product.id, value);
                                                    }}
                                                    className="w-14 text-center border rounded-md h-8 text-sm outline-none"
                                                />

                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="cursor-pointer"
                                                    onClick={() => increaseQty(item.product.id)}
                                                >
                                                    +
                                                </Button>

                                            </div>
                                            <Button
                                                size="sm"
                                                variant="destructive"
                                                className="cursor-pointer"
                                                onClick={() => removeFromCart(item.product.id)}
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    ))}
                                </div>


                                <div className="border-t pt-4 mt-4 flex justify-between items-center">
                                    <p className="font-semibold text-lg">
                                        Total: ₹{totalPrice}
                                    </p>

                                    <Button
                                        onClick={() => {
                                            const itemsText = cart
                                                .map(
                                                    (item) =>
                                                        `• ${item.product.name} (x${item.quantity}) - ₹${item.product.price * item.quantity
                                                        }`
                                                )
                                                .join("\n");

                                            const total = cart.reduce(
                                                (sum, item) =>
                                                    sum + item.product.price * item.quantity,
                                                0
                                            );

                                            sendFullWhatsAppOrder({
                                                message: `*New Order*\n\n${itemsText}\n\n*Total: ₹${total}*\n`,
                                            });
                                        }}
                                        className="bg-primary cursor-pointer text-white"
                                    >
                                        Checkout
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}