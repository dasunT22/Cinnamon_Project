import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import FactoryTour from "../FactoryTour/FactoryTour";
import Shop from "../Shop/Shop";
import "./Home.css";


const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="hero-content" style={{maxWidth: '1440px', width: '100%', margin: '0 auto', position: 'relative'}}>
        <div className="hero-text">
          <h1>
            Discover Nature's<br />
            Finest Cinnamon
          </h1>
          <p>
            Premium organic cinnamon products harvested from sustainable farms and crafted with care in our artisanal factory.
          </p>
          <div className="hero-buttons">
            <button className="shop-btn" onClick={() => navigate("/shop")}>Shop Now <span className="arrow">→</span></button>
            <button className="tour-btn" onClick={() => navigate("/factoryTour")}>Book a Factory Tour</button>
          </div>
        </div>
      </main>
      <div className="hero-bg" />
      {/* <div style={{ marginTop: -10, marginBottom: 0, zIndex: 1, position: "relative" }}>
        <Shop />
      </div>
      <div className="hero-bg" />
      <div style={{ marginTop: 48, marginBottom: 0, zIndex: 1, position: "relative" }}>
        <AboutUs />
      </div>
        <div className="hero-bg" />
        <div style={{ marginTop: 48, marginBottom: 0, zIndex: 1, position: "relative" }}>
        <FactoryTour />
      </div> */}

      <div style={{ marginTop: -75, marginBottom: 0, zIndex: 1, position: "relative", background: '#fff' }}>
        <Shop />
      </div>
      <div style={{ marginTop: 0, marginBottom: 0, zIndex: 1, position: "relative", background: '#fff' }}>
        <AboutUs />
      </div>
      <div style={{ marginTop: 0, marginBottom: 0, zIndex: 1, position: "relative", background: '#fff' }}>
        <FactoryTour />
      </div>
      <div style={{ marginTop: 0, marginBottom: 0, zIndex: 1, position: "relative", background: '#fff' }}>
        <ContactUs />
      </div>
      <div style={{ marginTop: -20, marginBottom: 0, zIndex: 1, position: "relative", background: '#fff' }}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
