import "./Booking.css"; // Use the same CSS for consistency

const bookingData = {
  date: "Wednesday, July 16, 2025",
  time: "9:00 AM",
  guests: 2,
  cost: 50,
  name: "Dasun Tharinda",
  email: "dasunathapaththu22@gmail.com",
  phone: "+94782222222",
};

const Confirmation = () => {
  const handleConfirm = () => {
    // Add your confirmation logic here
    alert("Booking Confirmed!");
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
          <div className="circle">1</div>
          <span>Select Date & Time</span>
        </div>
        <div className="step active">
          <div className="circle">2</div>
          <span>Your Details</span>
        </div>
        <div className="step active">
          <div className="circle active">3</div>
          <span>Confirmation</span>
        </div>
      </div>

      <div className="booking-form">
        <h4>Confirm Your Booking</h4>
        <div
          className="confirmation-summary"
          style={{
            background: "#fff9ec",
            borderRadius: "14px",
            padding: "24px 32px",
            marginBottom: "24px",
          }}
        >
          <h3 style={{ color: "#c89f6a" }}>Ceylon Cinnamon Factory Tour</h3>
          <div>
            <strong>Date:</strong> {bookingData.date}
          </div>
          <div>
            <strong>Time:</strong> {bookingData.time}
          </div>
          <div>
            <strong>Guests:</strong> {bookingData.guests} Guests
          </div>
          <div>
            <strong>Total Cost:</strong> ${bookingData.cost}
          </div>
        </div>

        <div
          className="confirmation-contact"
          style={{
            background: "#fff",
            border: "1px solid #e2e2e2",
            borderRadius: "10px",
            padding: "18px 24px",
            marginBottom: "24px",
          }}
        >
          <h4 style={{ color: "#2d4a6a" }}>Contact Information</h4>
          <div>
            <strong>Name:</strong> {bookingData.name}
          </div>
          <div>
            <strong>Email:</strong> {bookingData.email}
          </div>
          <div>
            <strong>Phone:</strong> {bookingData.phone}
          </div>
        </div>

        <div
          className="confirmation-included"
          style={{
            background: "#f2f7fe",
            borderRadius: "10px",
            padding: "18px 24px",
            marginBottom: "24px",
          }}
        >
          <h4 style={{ color: "#2d4a6a" }}>What's Included:</h4>
          <ul style={{ color: "#2d4a6a" }}>
            <li>Guided factory tour with expert commentary</li>
            <li>Meet the local cinnamon farmers</li>
            <li>Hands-on cinnamon preparation experience</li>
            <li>Fresh cinnamon tasting session</li>
            <li>Complimentary Ceylon cinnamon sample pack</li>
          </ul>
        </div>
        <button
          className="booking-continue"
          type="button"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Confirmation;