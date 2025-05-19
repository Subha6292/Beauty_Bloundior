import React from "react";
import spfBanner from "../assets/spfBanner.jpg";

const HeroBanner = () => {
    return (
        <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${spfBanner})`, height: "500px" }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black/10" />

        <div className="absolute inset-0 flex flex-col justify-center pl-10 md:pl-20 text-left text-black max-w-[600px]">
            <nav className="text-sm mb-2 text-gray-700">
            Home <span className="mx-1">{`>`}</span> <span className="text-gray-900 font-medium">Skincare</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-semibold mb-3 leading-snug">SPF You’ll Love to Layer.</h1>
            <p className="text-md md:text-lg text-gray-800 mb-5">
            UV Filters SPF 45 Serum layers like a serum, with no white cast. Add it to your regimen for hydrating UV protection.
            </p>
            <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-all w-fit text-sm tracking-wide">
            SHOP NOW
            </button>
        </div>
        </div>
    );
};

export default HeroBanner;
