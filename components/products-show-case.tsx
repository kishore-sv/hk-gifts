"use client"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Star, Plus, ShoppingCart, ArrowRight, BugPlay } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import CartButton from "./cart-button"
interface Product {
  id: number
  title: string
  slug: string
  rating: number
  price: number
  images: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Birthday Currency Note Frame",
    slug: "birthday-currency-note-frame",
    rating: 5,
    price: 500,
    images: [
      "/birthday-currency-note-1.png",
      "/birthday-currency-note-2.jpg",
      "/birthday-currency-note-3.jpeg",
    ],
  },
  {
    id: 2,
    title: "Explosion Gift Box",
    slug: "explosion-gift-box",
    rating: 4.5,
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513885535751-8b9238cd48?q=80&w=600&h=600&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Photo Scrapbook Album",
    slug: "photo-scrapbook-album",
    rating: 4.7,
    price: 650,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BHGGOY4y5hcnb_OeVOft8XV-2sPnlLzOqw&s",
      "https://images.unsplash.com/photo-1456086272160-b28b0645b729?q=80&w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=600&h=600&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Customized Name Frame",
    slug: "customized-name-frame",
    rating: 4.9,
    price: 450,
    images: [
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&h=600&fit=crop",
    ],
  },
  // {
  //     "id": 5,
  //     "title": "LED Photo Bottle",
  //     "slug": "led-photo-bottle",
  //     "rating": 4.6,
  //     "price": 550,
  //     "images": [
  //         "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=600&h=600&fit=crop"
  //     ]
  // },
  // {
  //     "id": 6,
  //     "title": "Mini Chocolate Gift Basket",
  //     "slug": "mini-chocolate-gift-basket",
  //     "rating": 4.5,
  //     "price": 699,
  //     "images": [
  //         "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1548907040-4ba4289f0a49?q=80&w=600&h=600&fit=crop"
  //     ]
  // },
  // {
  //     "id": 7,
  //     "title": "Surprise Gift Explosion Card",
  //     "slug": "surprise-explosion-card",
  //     "rating": 4.8,
  //     "price": 399,
  //     "images": [
  //         "https://images.unsplash.com/photo-1512909006721-3d6018887183?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&h=600&fit=crop"
  //     ]
  // },
  // {
  //     "id": 8,
  //     "title": "Memory Jar Gift",
  //     "slug": "memory-jar-gift",
  //     "rating": 4.7,
  //     "price": 350,
  //     "images": [
  //         "https://images.unsplash.com/photo-1536622296737-030669e00212?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1502301197179-65217d7ad738?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1590641663999-db623777548f?q=80&w=600&h=600&fit=crop"
  //     ]
  // },
  // {
  //     "id": 9,
  //     "title": "Customized Spotify Frame",
  //     "slug": "customized-spotify-frame",
  //     "rating": 4.9,
  //     "price": 599,
  //     "images": [
  //         "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&h=600&fit=crop"
  //     ]
  // },
  // {
  //     "id": 10,
  //     "title": "Handmade Love Letters Box",
  //     "slug": "love-letters-box",
  //     "rating": 4.6,
  //     "price": 450,
  //     "images": [
  //         "https://images.unsplash.com/photo-1518199266791-bd373292e90c?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1516589173944-144180d31f5f?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1581022295087-35e593704911?q=80&w=600&h=600&fit=crop"
  //     ]
  // },
  // {
  //     "id": 11,
  //     "title": "Photo Collage Frame",
  //     "slug": "photo-collage-frame",
  //     "rating": 4.7,
  //     "price": 700,
  //     "images": [
  //         "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1490312278390-ab6414f81c81?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&h=600&fit=crop"
  //     ]
  // },
  // {
  //     "id": 12,
  //     "title": "DIY Gift Hamper Box",
  //     "slug": "diy-gift-hamper-box",
  //     "rating": 4.5,
  //     "price": 899,
  //     "images": [
  //         "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1511113232230-bb8f8ff34a81?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1512909006721-3d6018887183?q=80&w=600&h=600&fit=crop"
  //     ]
  // },
  // {
  //     "id": 13,
  //     "title": "Anniversary Photo Book",
  //     "slug": "anniversary-photo-book",
  //     "rating": 4.8,
  //     "price": 950,
  //     "images": [
  //         "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1531346680769-a1d79b57db52?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1456086272160-b28b0645b729?q=80&w=600&h=600&fit=crop"
  //     ]
  // },
  // {
  //     "id": 14,
  //     "title": "Customized Polaroid Set",
  //     "slug": "customized-polaroid-set",
  //     "rating": 4.6,
  //     "price": 400,
  //     "images": [
  //         "https://images.unsplash.com/photo-1526285856210-b5549f70ee23?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=600&h=600&fit=crop"
  //     ]
  // },
  // {
  //     "id": 15,
  //     "title": "Romantic Gift Combo Box",
  //     "slug": "romantic-gift-combo-box",
  //     "rating": 4.9,
  //     "price": 1200,
  //     "images": [
  //         "https://images.unsplash.com/photo-1516589173944-144180d31f5f?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1518199266791-bd373292e90c?q=80&w=600&h=600&fit=crop",
  //         "https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?q=80&w=600&h=600&fit=crop"
  //     ]
  // }
]

export default function ProductsShowCase({ title }: { title: string }) {
  return (
    <div className="w-full">
      <h1 className="mb-2 text-2xl font-bold capitalize">{title}</h1>
      <p className="text-md font-medium text-muted-foreground">
        Discover thoughtful and creative gift ideas for birthdays,
        anniversaries, holidays, and more.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="my-10 flex w-full items-center justify-center">
        <Button variant="secondary" className="group cursor-pointer">
          View All{" "}
          <ArrowRight className="size-4 transition-all ease-in-out group-hover:translate-x-1" />{" "}
        </Button>
      </div>
    </div>
  )
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative">
      <div className="h-full w-full">
        <div className="relative border p-4">
          <Link href={`/products/${product.slug}`}>
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
                alt={product.title}
                width={500}
                height={500}
              />
            </div>
            <div className="relative z-20 mt-2">
              <h2>{product.title}</h2>
              <div>
                <Ratings ratings={product.rating} />
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
          <div className="flex items-center gap-3">
            <Button size="sm" className="mt-2 cursor-pointer">
              Order Now
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="mt-2 cursor-pointer"
            >
              <Plus /> Add To Cart
            </Button>
          </div>

        </div>
      </div>
    </div >
  )
}

export function Ratings({ className, ratings }: { className?: string, ratings: number }) {
  return (
    <div className={cn(className, "flex items-center gap-1")}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fillPercentage = Math.min(Math.max(ratings - i, 0), 1) * 100
        return (
          <div key={i} className="relative h-4 w-4">
            <Star className="absolute top-0 left-0 size-4 text-muted-foreground" />
            <Star
              className="absolute top-0 left-0 size-4 fill-yellow-500 text-yellow-500"
              style={{ clipPath: `inset(0 ${100 - fillPercentage} % 0 0)` }}
            />
          </div>
        )
      })}
      <span className="ml-1 text-sm text-muted-foreground">{ratings}</span>
    </div>
  )
}
