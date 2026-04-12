"use client"
import { useState } from "react";
import { createSlug } from "@/lib/utils";
import { PRODUCTS } from "@/products/data";
import { Rating } from "@/types";
import { Ratings } from "./products-show-case";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useAuth } from "@/hooks/use-auth";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"

export default function ReviewsSection({ productSlug }: { productSlug: string }) {
    const product = PRODUCTS.find((p) => createSlug(p.name) === productSlug);

    if (!product) return null;

    return (
        <section className="my-10">
            <h2 className="text-2xl font-bold">Reviews</h2>

            <h3 className="text-lg font-bold mt-4 text-center">
                Customer Reviews
            </h3>

            <RatingsSection ratings={product.ratings} />

            <ReviewsList ratings={product.ratings} />
        </section>
    );
}

function RatingsSection({ ratings }: { ratings: Rating[] }) {
    const total = ratings.length;

    const avg =
        total === 0
            ? 0
            : Number(
                (
                    ratings.reduce((sum, r) => sum + r.rating, 0) / total
                ).toFixed(1)
            );

    const distribution = [5, 4, 3, 2, 1].map((star) => {
        const count = ratings.filter(
            (r) => Math.floor(r.rating) === star
        ).length;

        return {
            stars: star,
            count,
            value: total ? (count / total) * 100 : 0,
        };
    });

    return (
        <div className="mt-8 flex flex-col md:flex-row items-center justify-around gap-8 max-w-5xl mx-auto">

            <div className="flex flex-col items-center text-center w-full md:w-1/4">
                <h4 className="text-5xl font-bold mb-2">{avg}</h4>
                <Ratings ratings={ratings} />
                <p className="text-sm text-muted-foreground mt-2">
                    {total} reviews
                </p>
            </div>

            <div className="w-full md:w-2/4 max-w-md space-y-3 px-4">
                {distribution.map((row) => (
                    <div key={row.stars} className="flex items-center gap-3 text-sm">
                        <div className="flex items-center gap-1 w-24">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`size-4 ${i < row.stars
                                        ? "fill-yellow-500 text-yellow-500"
                                        : "text-muted/30"
                                        }`}
                                />
                            ))}
                        </div>

                        <Progress value={row.value} className="h-2 flex-1" />

                        <span className="w-8 text-right text-muted-foreground">
                            {row.count}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center text-center w-full md:w-1/4">
                <p className="mb-4 text-sm text-muted-foreground">
                    Share your thoughts with other customers
                </p>
                <WriteReviewButton />
            </div>
        </div>
    );
}


function ReviewsList({ ratings }: { ratings: Rating[] }) {
    const [sort, setSort] = useState("recent");
    const [page, setPage] = useState(1);

    const ITEMS_PER_PAGE = 10;

    const sortedRatings = [...ratings].sort((a, b) => {
        if (sort === "highest") return b.rating - a.rating;
        if (sort === "lowest") return a.rating - b.rating;
        if (sort === "recent")
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        return 0;
    });

    const totalPages = Math.ceil(sortedRatings.length / ITEMS_PER_PAGE);

    const paginatedRatings = sortedRatings.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    return (
        <div className="my-10 border-t py-4 space-y-4">

            <Select value={sort} onValueChange={(val) => {
                setSort(val);
                setPage(1);
            }}>
                <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="recent">Recent</SelectItem>
                    <SelectItem value="highest">Highest Rating</SelectItem>
                    <SelectItem value="lowest">Lowest Rating</SelectItem>
                </SelectContent>
            </Select>

            {paginatedRatings.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                    No reviews yet.
                </p>
            ) : (
                paginatedRatings.map((r) => (
                    <div key={r.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center">
                            <p className="font-semibold">{r.name}</p>
                            <span className="text-xs text-muted-foreground">
                                {r.date}
                            </span>
                        </div>

                        <Ratings ratings={[r]} />

                        <p className="mt-2 text-sm">{r.description}</p>
                    </div>
                ))
            )}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-6">

                    <Button
                        variant="outline"
                        disabled={page === 1}
                        onClick={() => setPage((p) => p - 1)}
                    >
                        <ArrowLeft /> Prev
                    </Button>

                    <span className="text-sm">
                        Page {page} of {totalPages}
                    </span>

                    <Button
                        variant="outline"
                        disabled={page === totalPages}
                        onClick={() => setPage((p) => p + 1)}
                    >
                        Next <ArrowRight />
                    </Button>
                </div>
            )}
        </div>
    );
}

function WriteReviewButton() {
    const { user } = useAuth();

    const [open, setOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => {
                    if (!user) {
                        setLoginOpen(true);
                    } else {
                        setOpen(true);
                    }
                }}
            >
                Write a Review
            </Button>

            <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Login Required</DialogTitle>
                    </DialogHeader>

                    <p className="text-sm">You must be logged in to write a review.</p>

                    <Button onClick={() => (window.location.href = "/login")}>
                        Go to Login
                    </Button>
                </DialogContent>
            </Dialog>


            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Write Review</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                        <Input type="file" />

                        <Input placeholder="Rating (1-5)" />

                        <Input placeholder="Write your review..." />

                        <Button className="w-full">Submit Review</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}