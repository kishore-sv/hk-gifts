import ProductsShowCase, { Ratings } from "@/components/products-show-case";
import ReviewsSection from "@/components/reviews-section";
import { Button } from "@/components/ui/button";
import WhatsappButton, { WhatsAppIcon } from "@/components/whatsapp-button";
import { Plus } from "lucide-react";

export default function ProductPage() {

    return (
        <div className="min-h-svh px-4 md:px-10 lg:max-w-5xl pt-6 md:pt-10 mx-auto">
            <section className="w-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-20">
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                    <div className="w-full object-cover rounded-lg border overflow-hidden">
                        <img height={500} width={500} draggable={false} className="select-none active:scale-105 transition-all ease-in-out delay-50 dark:invert cursor-zoom-in w-full h-full object-cover aspect-square" src="/birthday-currency-note-1.png" alt="Gift packing" />
                    </div>
                    <div className="flex gap-2 overflow-x-auto w-full justify-start lg:justify-center mt-4 items-center pb-2 snap-x">
                        <img draggable={false} className="select-none rounded-md border shadow hover:opacity-50 cursor-pointer dark:invert w-20 h-20 md:w-24 md:h-24 object-cover shrink-0 snap-start" src="/birthday-currency-note-1.png" alt="Gift packing" />
                        <img draggable={false} className="select-none rounded-md border shadow hover:opacity-50 cursor-pointer dark:invert w-20 h-20 md:w-24 md:h-24 object-cover shrink-0 snap-start" src="/birthday-currency-note-2.jpg" alt="Gift packing" />
                        <img draggable={false} className="select-none rounded-md border shadow hover:opacity-50 cursor-pointer dark:invert w-20 h-20 md:w-24 md:h-24 object-cover shrink-0 snap-start" src="/birthday-currency-note-3.jpeg" alt="Gift packing" />
                        <img draggable={false} className="select-none rounded-md border shadow hover:opacity-50 cursor-pointer dark:invert w-20 h-20 md:w-24 md:h-24 object-cover shrink-0 snap-start" src="/birthday-currency-note-1.png" alt="Gift packing" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize">3d Heart Shaped Moon Lamp/Light Gift with Photo</h1>
                    <p className="text-xl md:text-2xl mt-4 md:mt-6 font-bold"><span className="text-sm md:text-base line-through text-muted-foreground mr-2">Rs. 2,499</span> Rs. 1,999</p>
                    <Ratings className="mt-4" ratings={3.8} />
                    <p className="text-sm text-muted-foreground mt-2">123 reviews</p>

                    <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <Button className="bg-green-500 hover:bg-green-600 text-white cursor-pointer w-full sm:w-auto"><WhatsAppIcon />Order on WhatsApp</Button>
                        <Button variant="outline" className="cursor-pointer w-full sm:w-auto"><Plus /> Add to Cart</Button>
                    </div>
                    <div className="mt-8">
                        <p className="text-lg md:text-xl font-bold">Product Details</p>
                        <ul className="mt-4 space-y-2 list-disc list-inside text-secondary-foreground text-sm md:text-base">
                            <li>Customized 3d Heart shaped Moon Lamp Gift with Photo</li>
                            <li>We can Add either two pictures or one picture and one quote</li>
                            <li>Moonlamp Comes with a wooden stand</li>
                            <li>Rechargeable</li>
                            <li>3d Heart shaped moon lamp gift with photo is an ideal customized gift for any occasion, including birthdays, anniversaries, weddings and more</li>
                            <li>Memorable gift for your Boyfriend/Girlfriend, Husband/Wife.</li>
                            <li>For Customization or Preview Whatsapp us</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="my-20">
                <ReviewsSection productSlug="3d-heart-shaped-moon-lamp-light-gift-with-photo" />
            </section>

            <section className="my-20">
                <ProductsShowCase title="Related Products" />
            </section>


        </div>
    )
}