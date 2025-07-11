
import Navbar from "../../components/Navbar/Navbar";
import "./AboutUs.css";

const certificateImages = [
  "/images/about.png", // Use about.png for demonstration, replace with actual certificate images if available
  "/images/about.png",
  "/images/about.png",
  "/images/about.png",
  "/images/about.png",
  "/images/about.png",
  "/images/about.png",
  "/images/about.png",
];

const AboutUs = () => (
    <>
    <Navbar />
  <div className="aboutus-container">
    <div className="shop-header">
      <div>
        <h2>About Us</h2>
        <span className="aboutus-sub">Pure. Authentic. Sri Lankan.</span>
      </div>
    </div>
    <hr className="aboutus-divider" />
    <div className="aboutus-main">
      <div className="aboutus-text">
        <p>
          At Gourmet Ceylon Cinnamon, we are passionate about bringing you the purest, finest cinnamon directly from the lush plantations of Sri Lanka.
        </p>
        <p>
          We believe in quality, authenticity, and sustainability in every stick and powder we produce. Our cinnamon is carefully hand-harvested, sun-dried, and prepared using traditional methods to preserve its natural aroma and health benefits.
        </p>
        <p>
          As a proudly Sri Lankan brand, we work closely with local farmers, ensuring fair practices while supporting rural communities. Every product we deliver carries the true essence of Ceylon, adding warmth and richness to your daily life.
        </p>
        <p>
          Whether you are a health-conscious individual, a home baker, or a culinary enthusiast, our mission is to deliver pure Ceylon cinnamon that you can trust, enhancing your recipes with its unique sweet-spicy flavor.
        </p>
        <p>
          Experience the authentic taste of Ceylon with us. Let's bring nature's golden spice to your kitchen.
        </p>
      </div>
      <div className="aboutus-image-box">
        <img src="/images/about.png" alt="About Us" className="aboutus-image" />
        <div className="aboutus-image-border" />
      </div>
    </div>
    <div className="shop-header" style={{marginTop: '32px'}}>
      <div>
        <h2>Our Certificatation</h2>
        <span className="aboutus-cert-sub">Trusted. Certified. Guaranteed Quality.</span>
      </div>
    </div>
    <hr className="aboutus-divider" />
    <div className="aboutus-cert-grid">
      {certificateImages.map((img, idx) => (
        <div className="aboutus-cert-card" key={idx}>
          <img src={img} alt="Certificate" className="aboutus-cert-img" />
          <div className="aboutus-cert-title">ISO 9001<br />Sri lanka</div>
        </div>
      ))}
    </div>
  </div>
  </>
);

export default AboutUs;
