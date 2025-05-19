import React from "react";
import prep from "../assets/Product1.jpg";
import treat from "../assets/Product2.jpg";
import seal from "../assets/serum1.jpg";

const steps = [
    {
        id: 1,
        title: "Step 1: Prep",
        desc: "Cleanse the skin and prepare it to receive active ingredients.",
        img: prep,
    },
    {
        id: 2,
        title: "Step 2: Treat",
        desc: "Address specific skin concerns using targeted formulas.",
        img: treat,
    },
    {
        id: 3,
        title: "Step 3: Seal",
        desc: "Lock in benefits and support the skin barrier.",
        img: seal,
    },
    ];

    const ShopByStep = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Shop By Step</h2>
        <p className="text-gray-700 max-w-2xl mb-10">
            Our 3 step regimen approach is designed to help you customize your skincare routine. Explore formulations that PREP skin, TREAT concerns or SEAL in benefits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
            <div key={step.id}>
                <img src={step.img} alt={step.title} className="w-full object-cover" />
                <h3 className="font-semibold text-lg mt-4">{step.title}</h3>
                <p className="text-gray-700 text-sm mt-1">{step.desc}</p>
                <a href="#" className="text-sm font-medium mt-3 inline-block group hover:underline">
                View All <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
            </div>
            ))}
        </div>
        </section>
    );
};

export default ShopByStep;
