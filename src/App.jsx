import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import AboutUs from './pages/AboutUs/AboutUs';
import FactoryTour from './pages/FactoryTour/FactoryTour';
import ContactUs from './pages/ContactUs/ContactUs';
import Booking from './pages/FactoryTour/Booking';
import Details from './pages/FactoryTour/Details';
import Confirmation from './pages/FactoryTour/Confirmation';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/factoryTour" element={<FactoryTour />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/factory-tour/details" element={<Details />} />
          <Route path="/factory-tour/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
