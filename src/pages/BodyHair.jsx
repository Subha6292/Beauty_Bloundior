import React from "react";
import bodyHairImg from "../assets/regimen.jpg";

const BodyHairSection = () => {
    return (
        <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            {/* Text */}
            <div className="max-w-xl text-center md:text-left">
            <nav className="text-sm text-gray-500 mb-4">
                <span>Home</span> <span className="mx-2">{">"}</span>
                <span className="text-black font-medium">Body + Hair</span>
            </nav>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Formulated For Body + Hair</h2>
            <p className="text-gray-700 mb-6">
                Explore products formulated to target everyday concerns for both hair and body.
            </p>
            <a href="#" className="text-base font-semibold hover:underline group">
                Shop Now <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
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
