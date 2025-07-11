import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import AboutUs from './pages/AboutUs/AboutUs';
import Landing from './pages/Landing/Landing';
import FactoryTour from './pages/FactoryTour/FactoryTour';
import ContactUs from './pages/ContactUs/ContactUs';
import Booking from './pages/FactoryTour/Booking';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/factoryTour" element={<FactoryTour />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
