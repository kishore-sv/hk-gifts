"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { cn, createSlug } from "@/lib/utils";
import { PRODUCTS } from "@/products/data";
import Link from "next/link";

export default function SearchButton() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    const results = query
        ? PRODUCTS.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                variant="outline"
                className="cursor-pointer"
            >
                <Search />
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="h-[60vh] min-w-[60vw] flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Search</DialogTitle>
                    </DialogHeader>


                    <div className="my-4">
                        <Input
                            placeholder="Search for products..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-3">
                        {query === "" ? (
                            <p className="text-sm text-muted-foreground">
                                Start typing to search products...
                            </p>
                        ) : results.length === 0 ? (
                            <p className="text-sm text-muted-foreground">
                                No products found.
                            </p>
                        ) : (
                            results.slice(0, 10).map((product) => (
                                <Link key={product.id} href={`/products/${createSlug(product.name)}`}>
                                    <div
                                        className={cn(
                                            "flex items-center gap-3 p-2 rounded-lg border hover:bg-muted cursor-pointer"
                                        )}
                                    >
                                        <img
                                            src={product.images[0]}
                                            alt={product.name}
                                            className="w-12 h-12 object-cover rounded"
                                        />
                                        <div>
                                            <p className="font-medium">{product.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                ₹{product.price}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}