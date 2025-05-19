import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Bestsellers from "./components/Bestsellers";
import CommonConcern from "./components/CommonConcern";
import Regimen from "./components/Regimen";
import Integrity from "./components/Integrity";
import Footer from "./components/Footer";
import NewPage from "./pages/NewPage";
import ProductCard from "./components/ProductCard"
import Sellers from "./pages/Sellers"
import SkinCare from "./pages/SkinCare"
import ShopByStep from "./components/ShopByStep"
import BodyHair from "./pages/BodyHair"
import SetsCollection from "./pages/SetsCollection"
import TransparencySection from "./pages/TransparencySection"

function Home() {
  return (
    <>
      <HeroSection />
      <Bestsellers />
      <CommonConcern />
      <Regimen />
      <Integrity />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/sell" element={<Sellers />} />
          <Route path="/care" element={<SkinCare />} />
          <Route path="/bodyhair" element={<BodyHair />} />
          <Route path="/setcollection" element={<SetsCollection />} />
          <Route path="/transperency" element={<TransparencySection />} />
        </Routes>
        <ShopByStep />
        <ProductCard />
        <Footer />
      </div>
    </Router>
  );
}

export default App;