import { useState } from "react";
import "./Booking.css";

const timeSlots = [
  "9:00 AM",
  "10:30 AM",
  "12:00 PM",
  "1:30 PM",
  "3:00 PM",
  "4:30 PM"
];

const Booking = () => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("1 Guest");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <>
      <div className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Book A Factory Tour</h1>
          <p>Discover the authentic journey of Ceylon cinnamon from bark to spice</p>
          <div className="hero-info">
            <div>⭐ 4.9/5 Rating</div>
            <div>📍 Galle District, Sri Lanka</div>
            <div>🕒 2 Hours Duration</div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="progress-bar">
          <div className="step active">1</div>
          <div className="line"></div>
          <div className="step">2</div>
          <div className="line"></div>
          <div className="step">3</div>
        </div>

        <div className="booking-form">
          <h2>Select Your Visit Date & Time</h2>
          <div className="form-group">
            <label>📅 Choose Date</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label>👥 Number of Guests</label>
            <select value={guests} onChange={e => setGuests(e.target.value)}>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>
          </div>
          <div className="form-group">
            <label>🕒 Available Time Slots</label>
            <div className="time-slots">
              {timeSlots.map(slot => (
                <button
                  key={slot}
                  className={selectedTime === slot ? "active" : ""}
                  onClick={() => setSelectedTime(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
          <div className="footer">
            <div>Total: $50 ($25 per person)</div>
            <button className="next-btn">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
