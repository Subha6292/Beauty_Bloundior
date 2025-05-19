

export default function Navbar() {
    return (
        <div className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold">The <span className="font-light">Ordinary.</span></div>
        <div className="hidden md:flex space-x-6 text-lg font-medium">
            <a href="/new">New</a>
            <a href="/sell">Bestsellers</a>
            <a href="/care">Skincare</a>
            <a href="/bodyhair">Body + Hair</a>
            <a href="/setcollection">Sets & Collections</a>
            <a href="/transperency">The O. Library</a>
        </div>
        <button className="border-2 border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition">
            Build My Regimen
        </button>
        </div>
    );
}