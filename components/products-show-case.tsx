"use client"
import { cn, createSlug } from "@/lib/utils"
import Link from "next/link"
import { Star, Plus, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import AddToCartButton from "./AddToCartButton"
import { PRODUCTS } from "@/products/data"
import { Product } from "@/types"
import type { ProductTag, Rating } from "@/types";
import { sendWhatsAppOrder } from "@/helpers/whatsapp"
type Props = {
  className?: string;
  ratings: Rating[];
};

type ProductsShowCaseProps = {
  title: string;
  length?: number;
  tag?: ProductTag;
}


export default function ProductsShowCase({ title, length, tag }: ProductsShowCaseProps) {
  const filteredProducts = tag
    ? PRODUCTS.filter((product) => product.tag === tag)
    : PRODUCTS;

  return (
    <div className="w-full">
      <h1 className="mb-2 text-2xl font-bold capitalize">{title}</h1>

      <p className="text-md font-medium text-muted-foreground">
        Discover thoughtful and creative gift ideas for birthdays,
        anniversaries, holidays, and more.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts
          .slice(0, length)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>

      <div className="my-10 flex w-full items-center justify-center">
        <Button variant="secondary" className="group cursor-pointer">
          View All
        </Button>
      </div>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative">
      <div className="h-full w-full">
        <div className="relative border p-4">
          <Link href={`/products/${createSlug(product.name)}`}>
            <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
              <Plus
                strokeWidth={1}
                className="absolute -top-4 -left-4 size-8 text-muted-foreground"
              />
              <Plus
                strokeWidth={1}
                className="absolute -top-4 -right-4 size-8 text-muted-foreground"
              />
              <Plus
                strokeWidth={1}
                className="absolute -bottom-4 -left-4 size-8 text-muted-foreground"
              />
              <Plus
                strokeWidth={1}
                className="absolute -right-4 -bottom-4 size-8 text-muted-foreground"
              />
            </div>
            <div className="overflow-hidden rounded-sm transition-transform duration-300 ease-in-out">
              <img
                draggable={false}
                className="aspect-square h-auto w-full object-cover transition-transform duration-300 ease-in-out select-none hover:scale-105"
                src={product.images[0]}
                alt={product.name}
                width={500}
                height={500}
              />
            </div>
            <div className="relative z-20 mt-2">
              <h2>{product.name}</h2>
              <div>
                <Ratings ratings={product.ratings} />
              </div>
              <p>
                {" "}
                <span className="text-muted-foreground line-through">
                  ₹ {product.price + 99}
                </span>
                <span className="ml-2 text-lg font-bold">
                  ₹ {product.price}
                </span>{" "}
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-3 mt-2">
            <Button
              onClick={() =>
                sendWhatsAppOrder({
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                })
              }
              size="sm" className="cursor-pointer">
              Order Now
            </Button>
            <AddToCartButton product={product} />
          </div>

        </div>
      </div>
    </div >
  )
}




export function Ratings({ className, ratings }: Props) {
  const avg =
    ratings.length === 0
      ? 0
      : Number(
        (
          ratings.reduce((sum, r) => sum + r.rating, 0) /
          ratings.length
        ).toFixed(1)
      );

  return (
    <div className={cn(className, "flex items-center gap-1")}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fillPercentage = Math.min(Math.max(avg - i, 0), 1) * 100;

        return (
          <div key={i} className="relative h-4 w-4">

            <Star className="absolute top-0 left-0 size-4 text-muted-foreground" />
            <Star
              className="absolute top-0 left-0 size-4 fill-yellow-500 text-yellow-500"
              style={{
                clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
              }}
            />
          </div>
        );
      })}

      <span className="ml-1 text-sm text-muted-foreground">
        {avg} ({ratings.length})
      </span>
    </div>
  );
}