"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowUpRightIcon, Gift, ShoppingCart } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "./ui/empty";
import { RainbowButton } from "./ui/rainbow-button";
import { Badge } from "./ui/badge";

const CARTITMES = [
    {
        id: 1,
        name: "Product 1",
        price: 10,
        quantity: 1,
    },
    {
        id: 2,
        name: "Product 2",
        price: 20,
        quantity: 2,
    },
    {
        id: 3,
        name: "Product 3",
        price: 30,
        quantity: 3,
    },
]

export default function CartButton() {
    const [open, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState(CARTITMES);
    return (
        <>
            <Button onClick={() => setOpen(!open)} variant="outline" className="cursor-pointer relative text-foreground hover:text-primary">
                {cartItems.length >= 1 && <Badge variant="default" className="absolute -top-3 -right-2">3</Badge>}
                <ShoppingCart />
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="min-h-[60vh] min-w-[60vw]">
                    <DialogHeader>
                        <DialogTitle>Cart</DialogTitle>
                        <DialogDescription>
                            Your cart is empty.
                        </DialogDescription>
                        <Empty>
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                    <Gift />
                                </EmptyMedia>
                                <EmptyTitle>No Items in Cart</EmptyTitle>
                                <EmptyDescription>
                                    Your cart is empty. Get started by adding some items to your cart.
                                </EmptyDescription>
                            </EmptyHeader>
                            <EmptyContent className="flex-row justify-center gap-2">
                                <RainbowButton className="text-primary">Shop Now</RainbowButton>
                            </EmptyContent>
                        </Empty>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}