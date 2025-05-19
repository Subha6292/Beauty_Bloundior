import React from "react";
import bodyHairImg from "../assets/Product2.jpg";

const BodyHairSection = () => {
    return (
        <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            {/* Text */}
            <div className="max-w-xl text-center md:text-left">
            <nav className="text-sm text-gray-500 mb-4">
                <span>Home</span> <span className="mx-2">{">"}</span>
                <span className="text-black font-medium">Sets & Collections</span>
            </nav>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sets & Collections</h2>
            <p className="text-gray-700 mb-6">
                Our sets and collections make it easy for you to try some of our bestselling formulations all at once, and make excellent gifts for the skincare enthusiast.
            </p>
            {/* <a href="#" className="text-base font-semibold hover:underline group">
                Shop Now <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a> */}
            </div>

            {/* Image */}
            <div className="mt-10 md:mt-0 md:ml-10">
            <img src={bodyHairImg} alt="Body and Hair Care" className="w-full max-w-lg mx-auto md:mx-0" />
            </div>
        </div>
        </section>
    );
};

export default BodyHairSection;
