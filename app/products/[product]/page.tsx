"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { PRODUCTS } from "@/products/data";
import { createSlug } from "@/lib/utils";
import { Ratings } from "@/components/products-show-case";
import ReviewsSection from "@/components/reviews-section";
import ProductsShowCase from "@/components/products-show-case";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import AddToCartButton from "@/components/AddToCartButton";
import { sendWhatsAppOrder } from "@/helpers/whatsapp";

export default function ProductPage() {
    const params = useParams();
    const slug = params.product as string;

    const product = PRODUCTS.find((p) => createSlug(p.name) === slug);

    const [selectedImage, setSelectedImage] = useState(
        product?.images[0]
    );
    const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
    const [selectedSize, setSelectedSize] = useState("12 cm");
    const [customText, setCustomText] = useState("");
    const [file, setFile] = useState<File | null>(null);

    if (!product) {
        return (
            <div className="h-screen flex items-center justify-center">
                <p className="text-lg font-semibold">Product not found</p>
            </div>
        );
    }

    return (
        <div className="min-h-svh px-4 md:px-10 lg:max-w-5xl pt-6 md:pt-10 mx-auto">

            <section className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                <div className="w-full lg:w-1/2">

                    <div
                        className="w-full rounded-lg border overflow-hidden relative cursor-zoom-in"
                        onMouseMove={(e) => {
                            const { left, top, width, height } =
                                e.currentTarget.getBoundingClientRect();

                            const x = ((e.clientX - left) / width) * 100;
                            const y = ((e.clientY - top) / height) * 100;

                            setZoomStyle({
                                transformOrigin: `${x}% ${y}%`,
                                transform: "scale(2)",
                            });
                        }}
                        onMouseLeave={() => {
                            setZoomStyle({
                                transform: "scale(1)",
                                transformOrigin: "center",
                            });
                        }}
                    >
                        <img
                            src={selectedImage}
                            style={zoomStyle}
                            draggable={false}
                            className="w-full select-none aspect-square object-cover transition-transform duration-200"
                            alt={product.name}
                        />
                    </div>

                    <div className="flex gap-3 mt-4  overflow-x-auto p-2">
                        {product.images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                draggable={false}
                                onClick={() => setSelectedImage(img)}
                                className={`w-20 h-20 select-none object-cover rounded border cursor-pointer shrink-0
                  ${selectedImage === img ? "ring-2 ring-primary" : ""}
                `}
                                alt="preview"
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2">

                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                        {product.name}
                    </h1>

                    <div className="mt-4 flex items-center gap-3">
                        <span className="text-sm line-through text-muted-foreground">
                            ₹{product.price + 500}
                        </span>
                        <span className="text-2xl font-bold">
                            ₹{product.price}
                        </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                        <Ratings ratings={product.ratings} />
                        <span className="text-sm text-muted-foreground">
                            {product.ratings.length} reviews
                        </span>
                    </div>


                    <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
                        <Button
                            onClick={() => {
                                sendWhatsAppOrder({
                                    name: product.name,
                                    price: product.price,
                                    quantity: 1,
                                })
                            }}
                            size="lg" className="cursor-pointer bg-green-500 hover:bg-green-600" >
                            <WhatsAppIcon /> Order on WhatsApp
                        </Button>

                        <AddToCartButton product={product} />
                    </div>

                    <div className="mt-8">
                        <p className="text-lg font-semibold">Product Details</p>

                        <ul className="mt-3 space-y-2 text-md list-disc list-inside">
                            {product.product_details.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            <section className="my-20">
                <ReviewsSection productSlug={createSlug(product.name)} />
            </section>

            <section className="my-20">
                <ProductsShowCase title="Related Products" />
            </section>
        </div>
    );
}