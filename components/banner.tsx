import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Banner() {
    return (
        <div className="w-full h-10 bg-primary flex items-center justify-center">
            <Link href="/all-products" className="group">
                <span className="text-primary-foreground flex items-center gap-2">Free Shipping on orders over $50 <ArrowRight className="group-hover:translate-x-1 size-4 transition-all ease-in-out" /></span>
            </Link>
        </div>
    )
}