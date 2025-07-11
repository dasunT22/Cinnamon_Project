
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./FactoryTour.css";

const FactoryTour = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="factorytour-container">
        <div className="factorytour-bg">
          <img src="/images/factoryTour.png" alt="Factory Tour" className="factorytour-img" />
        </div>
        <div className="factorytour-content">
          <h1>Book A Factory Tour</h1>
          <p>
            Discover how pure Ceylon cinnamon is grown, harvested, and prepared with care on our guided factory tours in Sri Lanka.<br />
            Get a behind-the-scenes look at our sustainable processes, meet the farmers who bring this golden spice to life, and experience the rich aroma of freshly prepared cinnamon.<br />
            Whether you are a spice enthusiast, culinary professional, or traveler seeking authentic experiences, our tours offer a memorable journey into the world of Gourmet Ceylon Cinnamon.<br />
            <br />
            Book your tour today and see the true essence of Ceylon cinnamon in every step.
          </p>
          <button className="factorytour-btn" onClick={() => navigate("/booking")}>Book Now ...</button>
        </div>
      </div>
    </>
  );
};

export default FactoryTour;
