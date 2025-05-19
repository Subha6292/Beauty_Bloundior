import React from 'react'
import regimen from '../assets/regimen.jpg'

export default function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Image */}
            <div>
            <img src={regimen} alt="Regimen" className="w-full h-auto object-contain transition-transform duration-300 transform hover:scale-105" />

            </div>
            
            {/* Text */}
            <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                A Regimen For Every Concern.
            </h2>
            <p className="text-gray-700 mb-6">
                <strong>New to The Ordinary?</strong> We have built a guide to introduce you to some of our beginner-friendly
                skincare regimens that will help get you started on your skincare journey.
            </p>
            <button className="px-6 py-2 border border-gray-900 rounded-full text-gray-900 hover:bg-gray-100 transition duration-200">
                Explore The Guide
            </button>
            </div>
        </div>
        </div>
    )
}
