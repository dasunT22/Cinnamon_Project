
import Footer from "../../components/Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import FactoryTour from "../FactoryTour/FactoryTour";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import "./Landing.css";

const Landing = () => (
  <div className="landing-container">
    <Home />
    <Shop />
    <AboutUs />
    <FactoryTour />
    <ContactUs />
    <Footer />
  </div>
);

export default Landing;
