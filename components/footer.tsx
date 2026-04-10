import Link from "next/link";
import { TextHoverEffect } from "./ui/text-hover-effect";
import Logo from "./logo";
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <footer className="w-full px-4 md:px-8 lg:px-40 py-10 bg-background/80 border-t backdrop-blur-md">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20">
                <Link href="/" className="flex items-center gap-2 group hover:text-primary transition-all hover:underline underline-offset-4 ease-in-out">
                    <Logo type="png" className="size-26 rounded-md border p-px group-hover:text-primary" />
                    <div className="flex flex-col">
                        <span className="font-semibold text-xl">HM Surprizo</span>
                        <p className="text-sm text-muted-foreground">Creative Gift Packing Services</p>
                    </div>
                </Link>



                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 text-center lg:text-left">
                    <div>
                        <ul className="space-y-2">
                            <li><Link href="/all-products"><Button className="h-auto p-0 text-muted-foreground cursor-pointer hover:text-primary" variant="link">All Products</Button></Link></li>
                            <li><Link href="/best-sellers"><Button className="h-auto p-0 text-muted-foreground cursor-pointer hover:text-primary" variant="link">Best Sellers</Button></Link></li>
                            <li><Link href="/new-arrivals"><Button className="h-auto p-0 text-muted-foreground cursor-pointer hover:text-primary" variant="link">New Arrivals</Button></Link></li>
                            <li><Link href="/contact"><Button className="h-auto p-0 text-muted-foreground cursor-pointer hover:text-primary" variant="link">Contact</Button></Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            <li><Link href="/all-products"><Button className="h-auto p-0 text-muted-foreground cursor-pointer hover:text-primary" variant="link">Reviews</Button></Link></li>
                            <li><Link href="/best-sellers"><Button className="h-auto p-0 text-muted-foreground cursor-pointer hover:text-primary" variant="link">Testimonials</Button></Link></li>
                            <li><Link href="/new-arrivals"><Button className="h-auto p-0 text-muted-foreground cursor-pointer hover:text-primary" variant="link">Blog</Button></Link></li>
                            <li><Link href="/contact"><Button className="h-auto p-0 text-muted-foreground cursor-pointer hover:text-primary" variant="link">FAQs</Button></Link></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <ul className="space-y-2">
                            <li><Link href="/all-products"><Button className="h-auto p-0 text-muted-foreground cursor-pointer hover:text-primary" variant="link">About Us</Button></Link></li>
                            <li><Link href="/best-sellers"><Button className="h-auto p-0 text-muted-foreground cursor-pointer hover:text-primary" variant="link">Contact Us</Button></Link></li>
                            <li><Link href="/new-arrivals"><Button className="h-auto p-0 text-muted-foreground cursor-pointer hover:text-primary" variant="link">Privacy Policy</Button></Link></li>
                            <li><Link href="/contact"><Button className="h-auto p-0 text-muted-foreground cursor-pointer hover:text-primary" variant="link">Terms of Service</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-primary">
                <TextHoverEffect text="Surprizo" size="4xl" />
            </div>
        </footer>
    )
}