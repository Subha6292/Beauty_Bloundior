import React from "react";
import product1 from "../assets/serum1.jpg";
import product2 from "../assets/Product1.jpg";
import product3 from "../assets/Product2.jpg";
import product4 from "../assets/serum1.jpg";

const products = [
    {
        tag: "Bestseller",
        img: product1,
        title: "Hyaluronic Acid 2% + B5 (with Ceramides)",
        rating: 4.4,
        reviews: 1627,
        desc: "Plumps, Smooths",
        price: "11.90 USD",
        sizes: ["30ml", "60ml"],
    },
    {
        tag: "Bestseller",
        img: product2,
        title: "Glycolic Acid 7% Exfoliating Toner",
        rating: 4.5,
        reviews: 1084,
        desc: "Evens Texture & Tone, Radiance",
        price: "10.40 USD",
        sizes: ["100ml", "240ml"],
    },
    {
        tag: "New",
        img: product3,
        title: "GF 15% Solution",
        rating: 4.5,
        reviews: 360,
        desc: "Promotes Visible Regeneration",
        price: "18.60 USD",
        sizes: ["30ml"],
    },
    {
        tag: "Bestseller",
        img: product4,
        title: "Natural Moisturizing Factors + HA",
        rating: 4.3,
        reviews: 1489,
        desc: "Supports Skin Barrier",
        price: "8.00 USD",
        sizes: ["30ml", "100ml"],
    },
    ];

    export default function Bestsellers() {
    return (
        <div className="px-6 py-10 max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Bestsellers</h2>
            <a href="#" className="text-sm text-gray-600 hover:text-black">
            View All →
            </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((product, index) => (
            <div key={index} className="relative group">
                {/* Tag */}
                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                {product.tag}
                </span>

                {/* Product Image */}
                <img
                src={product.img}
                alt={product.title}
                className="w-full h-[300px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                />

                {/* Product Info */}
                <div className="mt-4">
                <h3 className="text-sm font-medium">{product.title}</h3>
                <div className="flex items-center text-sm text-gray-700 mt-1">
                    {"★".repeat(Math.floor(product.rating))}{" "}
                    <span className="ml-1 text-black">{product.rating}</span>
                    <span className="ml-2 text-gray-400">({product.reviews})</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{product.desc}</p>
                <p className="text-base font-semibold mt-2">{product.price}</p>

                {/* Sizes */}
                <div className="flex space-x-3 mt-2 text-sm text-gray-600">
                    {product.sizes.map((size, i) => (
                    <button
                        key={i}
                        className="hover:underline underline-offset-2"
                    >
                        {size}
                    </button>
                    ))}
                </div>

                {/* Add to Cart */}
                <button className="w-full mt-3 py-2 border border-black rounded hover:bg-black hover:text-white transition">
                    Add To Cart
                </button>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}
