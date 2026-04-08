import Link from "next/link";
import { TextHoverEffect } from "./ui/text-hover-effect";
import Logo from "./logo";
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <footer className="w-full px-4 md:px-8 lg:px-40 h-18 bg-background/80 border-t backdrop-blur-md">
            <div className="flex items-center gap-2 pt-10">
                <Link href="/" className="flex items-center gap-2 ml-10 mr-20 group hover:text-primary transition-all hover:underline underline-offset-4 ease-in-out">
                    <Logo className="w-6 h-6 group-hover:text-primary" />
                    <span className="font-semibold">HK Gifts</span>
                </Link>

                <div className="grid grid-cols-3 gap-40">
                    <div>
                        <ul>
                            <li><Link href="/all-products"><Button className="text-foreground cursor-pointer hover:text-primary" variant="link">All Products</Button></Link></li>
                            <li><Link href="/best-sellers"><Button className="text-foreground cursor-pointer hover:text-primary" variant="link">Best Sellers</Button></Link></li>
                            <li><Link href="/new-arrivals"><Button className="text-foreground cursor-pointer hover:text-primary" variant="link">New Arrivals</Button></Link></li>
                            <li><Link href="/contact"><Button className="text-foreground cursor-pointer hover:text-primary" variant="link">Contact</Button></Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link href="/all-products"><Button className="text-foreground cursor-pointer hover:text-primary" variant="link">Reviews</Button></Link></li>
                            <li><Link href="/best-sellers"><Button className="text-foreground cursor-pointer hover:text-primary" variant="link">Testimonials</Button></Link></li>
                            <li><Link href="/new-arrivals"><Button className="text-foreground cursor-pointer hover:text-primary" variant="link">Blog</Button></Link></li>
                            <li><Link href="/contact"><Button className="text-foreground cursor-pointer hover:text-primary" variant="link">FAQs</Button></Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link href="/all-products"><Button className="text-foreground cursor-pointer hover:text-primary" variant="link">About Us</Button></Link></li>
                            <li><Link href="/best-sellers"><Button className="text-foreground cursor-pointer hover:text-primary" variant="link">Contact Us</Button></Link></li>
                            <li><Link href="/new-arrivals"><Button className="text-foreground cursor-pointer hover:text-primary" variant="link">Privacy Policy</Button></Link></li>
                            <li><Link href="/contact"><Button className="text-foreground cursor-pointer hover:text-primary" variant="link">Terms of Service</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <TextHoverEffect text="HK Gifts" />
            </div>
        </footer>
    )
}