import React from "react";
import labImage from "../assets/labImage.jpg";

const TransparencySection = () => {
    return (
        <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-6">
            {/* Text Section */}
            <div className="flex items-center">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                It’s in our DNA: The Ordinary’s Commitment to Transparency and Skincare Science
                </h2>
            </div>

            {/* Image Section */}
            <div>
                <img
                src={labImage}
                alt="Laboratory with staff"
                className="w-full rounded-sm shadow-sm object-cover"
                />
            </div>
            </div>
        </div>
        </section>
    );
};

export default TransparencySection;
