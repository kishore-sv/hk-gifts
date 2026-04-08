import Link from "next/link";
import Logo from "./logo";
import { RainbowButton } from "./ui/rainbow-button";
import { Button } from "./ui/button";
import { Search, Menu } from "lucide-react";
import SearchButton from "./search-button";
import CartButton from "./cart-button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
    return (
        <nav className="w-full sticky top-0 z-9999 px-4 md:px-8 lg:px-40 flex items-center justify-between h-18 bg-background/50 border-b backdrop-blur-md">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2 group hover:text-primary transition-all hover:underline underline-offset-4 ease-in-out">
                    <Logo className="w-6 h-6 group-hover:text-primary" />
                    <span className="font-semibold">HK Gifts</span>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
                <Link href="/best-sellers" className="flex items-center gap-2"><Button variant="link" className="cursor-pointer text-foreground hover:text-primary">Best Sellers</Button></Link>
                <Link href="/all-products" className="flex items-center gap-2"><Button variant="link" className="cursor-pointer text-foreground hover:text-primary">All Products</Button></Link>
                <Link href="/new-arrivals" className="flex items-center gap-2"><Button variant="link" className="cursor-pointer text-foreground hover:text-primary">New Arrivals</Button></Link>
                <Link href="/contact" className="flex items-center gap-2"><Button variant="link" className="cursor-pointer text-foreground hover:text-primary">Contact</Button></Link>
                <SearchButton />
                <CartButton />
                <RainbowButton variant="outline">Login</RainbowButton>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center gap-2">
                <SearchButton />
                <CartButton />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col gap-4 px-6">
                        <SheetHeader>
                            <SheetTitle className="text-left font-semibold">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col space-y-4 mt-8">
                            <Link href="/best-sellers" className="text-lg font-medium hover:text-primary transition-colors">Best Sellers</Link>
                            <Link href="/all-products" className="text-lg font-medium hover:text-primary transition-colors">All Products</Link>
                            <Link href="/new-arrivals" className="text-lg font-medium hover:text-primary transition-colors">New Arrivals</Link>
                            <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">Contact</Link>
                        </div>
                        <div className="mt-auto">
                            <RainbowButton variant="outline" className="w-full">Login</RainbowButton>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}