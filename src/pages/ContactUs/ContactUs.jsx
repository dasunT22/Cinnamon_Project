
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "../../components/Navbar/Navbar";
import "./ContactUs.css";

const ContactUs = () => (
  <>
    <Navbar />
    <div className="contactus-container">
      <div className="shop-header">
      <div>
        <h2>Contact Us</h2>
        <span className="aboutus-sub">Here to Assist You</span>
      </div>
    </div>
    <hr className="contactus-divider" />
    <div className="contactus-main">
      <div className="contactus-info-box">
        <div className="contactus-info">
          <div>Mail Us :<br />Info@newlankacinnamon.lk</div>
          <div>Contact Us :<br />+94 772622196</div>
          <div>Address :<br />260/1, Weralu Anduwawa,<br />Mahan Edanda,<br />Karandeniya<br />Sri Lanka</div>
          <div className="logo">Gourmet Ceylon Cinnamon</div>
          <div>Follow Us On<br />
            <div className="contactus-social">
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="contactus-form-box">
        <form className="contactus-form">
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">E-mail :</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" rows="4" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
  </>
);

export default ContactUs;
