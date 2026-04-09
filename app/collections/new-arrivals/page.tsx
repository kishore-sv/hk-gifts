"use client"
import { ProductCard, PRODUCTS } from "@/components/products-show-case"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import React from "react"

export default function NewArrivalsPage() {
  return (
    <div className="w-full px-40 pt-10 pb-20">
      <h1 className="mb-2 text-2xl font-bold capitalize">New Arrivals</h1>
      <p className="text-md font-medium text-muted-foreground">
        Discover thoughtful and creative gift ideas for birthdays,
        anniversaries, holidays, and more.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center my-10">
      <Button variant="secondary" className="cursor-pointer group">View All <ArrowRight className="size-4 group-hover:translate-x-1 transition-all ease-in-out"/> </Button>
      </div>
    </div>
  )
}
