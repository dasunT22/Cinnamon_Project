import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div>
        <div className="footer-logo">Gourmet Ceylon Cinnamon</div>
        <div>260/1, Weralu Anduwawa, Mahan Edanda, Karandeniya, Sri Lanka</div>
        <div>Info@newlankacinnamon.lk</div>
        <div>+94 772622196</div>
      </div>
      <div className="footer-links">
        <a href="/home">Home</a>
        <a href="/shop">Shop</a>
        <a href="/aboutUs">About Us</a>
        <a href="/factoryTour">Factory Tour</a>
        <a href="/contactUs">Contact Us</a>
      </div>
      <div>
        <div>Follow Us</div>
        <div className="footer-social">
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} Gourmet Ceylon Cinnamon. All rights reserved.
    </div>
  </footer>
);

export default Footer;
