import { Button } from "@/components/ui/button"
import { RainbowButton } from "@/components/ui/rainbow-button"

export default function Page() {
  return (
    <div className="min-h-svh px-42 pt-10 mx-auto">
      <div className="flex items-center gap-20 justify-between">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-7xl font-bold capitalize">Createive Gift packing Services</h1>
          <p className="text-xl font-medium">HK Gifts helps you connect with customers who are actively looking to buy.</p>
          <RainbowButton size="lg" className="dark:text-primary">Get Started</RainbowButton>
        </div>
        <div>
          <img className="select-none rounded-md dark:invert" src="https://5.imimg.com/data5/BJ/FK/RT/SELLER-5000329/gifts-packing-box-500x500.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}
