import integrity from '../assets/integrity.jpg';

const IntegritySection = () => {
    return (
        <section className="w-full bg-white py-16 px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skincare with Integrity.
            </h2>
            <p className="text-gray-700 mb-6">
            Vegan, cruelty-free, not tested on animals, and recognized worldwide—
            our formulations reflect our ongoing commitment to high-quality skincare, 
            rooted in integrity and accessibility.
            </p>
            <button className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition duration-300">
            ABOUT US
            </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
            <img
            src={integrity}
            alt="Beakers"
            className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
            />
        </div>
        </section>
    );
};

export default IntegritySection;
