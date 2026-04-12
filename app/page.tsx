import ProductsShowCase from "@/components/products-show-case"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-svh px-4 md:px-10 lg:px-42 pt-10 mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 justify-between mb-20 lg:mb-35">
        <div className="space-y-4 max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold capitalize">Createive Gift packing Services</h1>
          <p className="text-lg md:text-xl font-medium">HM Surprizo helps you connect with customers who are actively looking to buy.</p>
          <Link href="/collections/all-products">
            <RainbowButton size="lg" className="dark:text-primary group">View All Products <ArrowRight className="size-4 group-hover:translate-x-1 transition-all" /></RainbowButton>
          </Link>
        </div>
        <div className="w-full max-w-md lg:max-w-none flex justify-center">
          <img draggable={false} className="select-none rounded-md dark:invert w-full h-auto max-w-[500px]" src="https://5.imimg.com/data5/BJ/FK/RT/SELLER-5000329/gifts-packing-box-500x500.jpg" alt="Gift packing" />
        </div>
      </div>
      <section className="mb-20 lg:mb-30">
        <ProductsShowCase title="Unique Gifts for Every Occasion" />
      </section>

      <section className="mb-20 lg:mb-30">
        <ProductsShowCase title="Trending Gifts" tag="trending" />
      </section>

      <section className="mb-20 lg:mb-30">
        <ProductsShowCase title="New Arrivals" tag="new-arrivals" />
      </section>
    </div>
  )
}
