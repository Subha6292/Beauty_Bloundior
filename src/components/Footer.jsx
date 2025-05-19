import { FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 text-sm px-6 py-12 border-t border-gray-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

            {/* Company */}
            <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
                <li>About Us</li>
                <li>The Ordinary DNA</li>
                <li>Join Us</li>
                <li className="text-xs text-gray-500 mt-2">Manufacture information: DECIEM Eastside</li>
            </ul>
            </div>

            {/* Customer Care */}
            <div>
            <h3 className="font-semibold mb-2">Customer Care</h3>
            <ul className="space-y-1">
                <li>FAQ</li>
                <li>Disposal Instructions</li>
                <li>Return Policy</li>
                <li>Promotion Terms & Conditions</li>
            </ul>
            </div>

            {/* Contact Us */}
            <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-1">
                <li>Track Order</li>
                <li>Sign In</li>
                <li>Store Locator</li>
            </ul>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-2">
            <h3 className="font-semibold mb-2">Be in the know.</h3>
            <p className="text-sm text-gray-700 mb-3">
                Subscribe to receive science-backed tips, access to special offers, and new innovations.
            </p>
            <div className="relative mb-2">
                <input
                type="email"
                placeholder="Email Address"
                className="w-full border-b border-gray-400 py-2 pr-10 outline-none"
                />
                <span className="absolute right-0 top-2 text-gray-700">&gt;</span>
            </div>
            <p className="text-xs text-gray-500">
                *By providing your email address you are agreeing to receive email communications...
                <br />
                <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Use</a> for more details or <a href="#" className="underline">Contact Us</a>.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4 text-xl">
                <FaFacebookF />
                <FaInstagram />
                <FaYoutube />
                <FaTiktok />
            </div>
            </div>
        </div>

        {/* Commitments & Location */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 mt-10 gap-6">
            <div>
            <h3 className="font-semibold mb-2">Our Commitments</h3>
            <ul className="space-y-1">
                <li>Accessibility</li>
                <li>Sustainability</li>
                <li>Change is the Journey</li>
                <li>Everything Is Chemicals</li>
            </ul>
            </div>

            <div>
            <h3 className="font-semibold mb-2">Location</h3>
            <div className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>INDIA</span>
                <a href="#" className="underline text-sm">Change</a>
            </div>
            <div className="mt-2">Language <strong>EN</strong></div>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 text-center text-xs text-gray-500 space-y-1">
            <p>© DECIEM Beauty Group Inc. 2025. All rights reserved.</p>
            <p>
            <a href="#" className="hover:underline">Terms & Conditions</a> ·
            <a href="#" className="hover:underline"> Privacy Policy</a> ·
            <a href="#" className="hover:underline"> Do not sell my personal information</a> ·
            <a href="#" className="hover:underline"> Cookies</a>
            </p>
            <p className="font-semibold mt-1">A DECIEM PROJECT.</p>
        </div>
        </footer>
    );
};

export default Footer;
