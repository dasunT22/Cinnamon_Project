import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ShopSection from "../../components/products/ShopSection";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import FactoryTour from "../FactoryTour/FactoryTour";
import "./Home.css";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Navbar />
      
      {/* Hero Section */}
      <main className="hero-content">
        <div className="hero-text">
          <h1>
            Discover Nature's<br />
            Finest Cinnamon
          </h1>
          <p>
            Premium organic cinnamon products harvested from sustainable farms and crafted with care in our artisanal factory.
          </p>
          <div className="hero-buttons">
            <button className="shop-btn" onClick={() => navigate("/shop")}>
              Shop Now <span className="arrow">→</span>
            </button>
            <button className="tour-btn" onClick={() => navigate("/factoryTour")}>
              Book a Factory Tour
            </button>
          </div>
        </div>
      </main>
      <div className="hero-bg" />

      {/* Content Sections */}
      <div className="content-section">
        <ShopSection />
      </div>
      
      <div className="content-section">
        <AboutUs />
      </div>
      
      <div className="content-section">
        <FactoryTour />
      </div>
      
      <div className="content-section">
        <ContactUs />
      </div>
      
      <div className="content-section">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
