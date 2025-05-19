import React from 'react';
import { Link } from 'react-router-dom';
import Product2 from '../assets/Product2.jpg';

const NewPage = () => {
    return (
        <div className="w-full bg-[#e6effa] py-12 px-6 lg:px-24">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">
            <Link to="/" className="hover:underline">Home</Link> &nbsp; &gt; &nbsp; <span className="text-black">New</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                SPF. Made for You.
            </h1>
            <p className="text-lg text-gray-700 mb-6">
                Hydrating, layerable sunscreen—for all faces. Our new UV Filters SPF 45 Serum layers like a serum, with no white cast.
            </p>
            <button className="px-6 py-3 border border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition">
                SHOP NOW
            </button>
            </div>

            {/* Product Image */}
            <div className="flex justify-center">
            <img
                src={Product2}
                alt="SPF Product"
                className="w-full max-w-md"
            />
            </div>
        </div>
        </div>
    );
};

export default NewPage;
