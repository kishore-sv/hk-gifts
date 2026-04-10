import { Star } from "lucide-react";
import { Ratings } from "./products-show-case";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function ReviewsSection({ productSlug }: { productSlug: string }) {
    return (
        <section className="my-10">
            <h2 className="text-2xl font-bold">Reviews</h2>

            <h3 className="text-lg font-bold mt-4 text-center">Customer Reviews</h3>

            <RatingsSection />

            <ReviewsList />

        </section >
    )
}

function RatingsSection() {
    return (
        <div className="mt-8 flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4 max-w-5xl mx-auto">
            <div className="flex flex-col items-center justify-center text-center w-full md:w-1/4">
                <h4 className="text-5xl font-bold mb-2">3.8</h4>
                <Ratings ratings={3.8} />
                <p className="text-sm text-muted-foreground mt-2">123 reviews</p>
            </div>

            <Separator orientation="vertical" className="hidden md:block h-32" />
            <Separator className="block md:hidden w-full max-w-xs" />

            <div className="w-full md:w-2/4 max-w-md space-y-3 px-4">
                {[
                    { stars: 5, value: 90, count: 100 },
                    { stars: 4, value: 10, count: 12 },
                    { stars: 3, value: 5, count: 5 },
                    { stars: 2, value: 2, count: 2 },
                    { stars: 1, value: 4, count: 4 },
                ].map((row) => (
                    <div key={row.stars} className="flex items-center gap-3 text-sm">
                        <div className="flex items-center justify-end gap-1 w-24 shrink-0">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`size-4 ${i < row.stars
                                        ? "fill-yellow-500 text-yellow-500"
                                        : "fill-muted text-muted/30"
                                        }`}
                                />
                            ))}
                        </div>
                        <Progress value={row.value} className="h-2 flex-1" />
                        <span className="w-8 text-right text-muted-foreground">{row.count}</span>
                    </div>
                ))}
            </div>

            <Separator orientation="vertical" className="hidden md:block h-32" />
            <Separator className="block md:hidden w-full max-w-xs" />

            <div className="flex flex-col items-center justify-center text-center w-full md:w-1/4">
                <p className="mb-4 text-sm text-muted-foreground px-4">Share your thoughts with other customers</p>
                <Button className="cursor-pointer">Write a Review</Button>
            </div>
        </div>
    )
}

function ReviewsList() {
    return (
        <div className="my-10 border-t py-4">
            <Select>
                <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="recent">Recent</SelectItem>
                        <SelectItem value="most-helpful">Most Helpful</SelectItem>
                        <SelectItem value="highest-rating">Highest Rating</SelectItem>
                        <SelectItem value="lowest-rating">Lowest Rating</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <p>each user review will come here.</p>
        </div>
    )
}