import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

const Details = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requests, setRequests] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    // You can pass data via state or context if needed
    navigate("/factory-tour/confirmation");
  };

  return (
    <div className="booking-container">
      <h2>Booking Factory Tour</h2>
      <p className="subtitle">
        Discover the authentic journey of Ceylon cinnamon from bark to spice
      </p>
      <hr className="booking-divider" />

      <div className="booking-steps">
        <div className="step active">
          <div className="circle active">1</div>
          <span>Select Date & Time</span>
        </div>
        <div className="step active">
          <div className="circle active">2</div>
          <span>Your Details</span>
        </div>
        <div className="step">
          <div className="circle">3</div>
          <span>Confirmation</span>
        </div>
      </div>

      <div className="booking-form">
        <h4>Enter Your Details</h4>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="booking-input"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="booking-input"
            required
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="booking-input"
            required
          />
        </label>
        <label>
          Special Requests
          <textarea
            value={requests}
            onChange={e => setRequests(e.target.value)}
            className="booking-input"
            rows={3}
            placeholder="Any special requests?"
          />
        </label>
        <button className="booking-continue" type="button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Details;