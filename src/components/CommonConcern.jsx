import React from 'react'
import aging from '../assets/aging.jpg'
import congestion from '../assets/congestion.jpg'
import texture from '../assets/texture.jpg'
import eyecare from '../assets/eyecare.jpg'
import redness from '../assets/redness.jpg'
import dryness from '../assets/dryness.jpg'

const concerns = [
    { title: 'Aging', img: aging },
    { title: 'Congestion', img: congestion },
    { title: 'Texture', img: texture },
    { title: 'Eye Care', img: eyecare },
    { title: 'Redness', img: redness },
    { title: 'Dryness', img: dryness },
]

export default function App() {
    return (
        <div className="p-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2">Common Concerns</h2>
        <p className="text-gray-600 mb-6">Not sure where to begin? Here are some common skin concerns.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {concerns.map((item, index) => (
            <div key={index} className="group cursor-pointer text-center">
                <div className="overflow-hidden rounded-md">
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-36 object-cover transform group-hover:scale-105 transition duration-300"
                />
                </div>
                <p className="mt-2 font-medium text-sm">
                {item.title} <span className="inline-block ml-1">→</span>
                </p>
            </div>
            ))}
        </div>
        </div>
    )
}
