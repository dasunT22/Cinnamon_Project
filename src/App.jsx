import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Booking from './pages/FactoryTour/Booking';
import Confirmation from './pages/FactoryTour/Confirmation';
import Details from './pages/FactoryTour/Details';
import FactoryTour from './pages/FactoryTour/FactoryTour';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
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
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
