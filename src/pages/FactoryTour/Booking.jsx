import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

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
        <div className="step">
          <div className="circle">2</div>
          <span>Your Details</span>
        </div>
        <div className="step">
          <div className="circle">3</div>
          <span>Confirmation</span>
        </div>
      </div>

      <div className="booking-form">
        <h4>Select Your Visit Date & Time</h4>
        <label>
          Choose Date
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="booking-input"
          />
        </label>
        <label>
          Number of Guests
          <input
            type="number"
            min="1"
            value={guests}
            onChange={e => setGuests(e.target.value)}
            className="booking-input"
          />
        </label>
        <div className="booking-times">
          <label>Available Time Slots</label>
          <div className="times-grid">
            <button
              className={time === "9:00 AM" ? "selected" : ""}
              onClick={() => setTime("9:00 AM")}
              type="button"
            >
              9:00 AM
            </button>
            <button
              className={time === "11:00 AM" ? "selected" : ""}
              onClick={() => setTime("11:00 AM")}
              type="button"
            >
              11:00 AM
            </button>
            <button
              className={time === "1:00 PM" ? "selected" : ""}
              onClick={() => setTime("1:00 PM")}
              type="button"
            >
              1:00 PM
            </button>
            <button
              className={time === "3:00 PM" ? "selected" : ""}
              onClick={() => setTime("3:00 PM")}
              type="button"
            >
              3:00 PM
            </button>
          </div>
        </div>
        <div className="booking-total">
          Total: $ {guests ? guests * 5 : 25}
          <br />
          $5 Per Person
        </div>
        <button
          className="booking-continue"
          type="button"
          onClick={() => navigate("/factory-tour/details")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Booking;