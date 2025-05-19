import { useEffect, useRef, useState } from "react";
import serum1 from "../assets/serum1.jpg";
import serum2 from "../assets/serum2.jpg";
import serum3 from "../assets/serum3.jpg";

export default function HeroSection() {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const container = scrollRef.current;
        const scrollStep = 300;
        const scrollDelay = 3000;

        const interval = setInterval(() => {
        if (!container || isHovered) return;

        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft + scrollStep >= maxScrollLeft) {
            // Restart scroll from beginning
            container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            container.scrollBy({ left: scrollStep, behavior: "smooth" });
        }
        }, scrollDelay);

        return () => clearInterval(interval);
    }, [isHovered]);

    const handleScroll = (direction) => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({
            left: direction === "left" ? -300 : 300,
            behavior: "smooth",
        });
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-[85vh]">
        {/* Left Section */}
        <div className="flex-1 p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Brighten Dull Skin.</h1>
            <p className="text-lg text-gray-600 mb-6">
            There's a science to radiant skin. Multi-Antioxidant Radiance Serum is a daily serum
            that brightens dull skin, with multi-antioxidant protection.
            </p>
            <button className="px-6 py-3 bg-white border-2 border-black text-lg rounded-full hover:bg-black hover:text-white transition">
            Shop Now
            </button>
        </div>

        {/* Right Section - Scrolling Images */}
        <div className="flex-1 overflow-hidden relative">
            <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide p-4"
            >
            {[serum1, serum2, serum3, serum1, serum2, serum3].map((img, i) => (
                <img
                key={i}
                src={img}
                alt="serum"
                className="w-[300px] h-[400px] object-cover rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
                />
            ))}
            </div>

            {/* Left Scroll Button */}
            <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            onClick={() => handleScroll("left")}
            >
            ◀
            </button>

            {/* Right Scroll Button */}
            <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            onClick={() => handleScroll("right")}
            >
            ➤
            </button>
        </div>
        </div>
    );
}