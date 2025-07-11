
import Cart from "../../components/Carts/Cart";
import Navbar from "../../components/Navbar/Navbar";
import "./Shop.css";

const products = [
  {
    id: 1,
    name: "Alba Cinnamon Sticks - 50g",
    price: 650,
    image: "/images/cinnamon1.png",
  },
  {
    id: 2,
    name: "Ceylon Cinnamon Powder - 100g",
    price: 950,
    image: "/images/cinnamon2.png",
  },
  {
    id: 3,
    name: "Cinnamon Quills Premium - 75g",
    price: 1200,
    image: "/images/cinnamon3.png",
  },
  {
    id: 4,
    name: "Organic Cinnamon Bark Chips - 50g",
    price: 580,
    image: "/images/cinnamon4.png",
  },
  {
    id: 5,
    name: "Cinnamon Essential Oil - 30ml",
    price: 1800,
    image: "/images/cinnamon5.png",
  },
  {
    id: 6,
    name: "Cinnamon Honey Infusion - 250ml",
    price: 1500,
    image: "/images/cinnamon6.png",
  },
  {
    id: 7,
    name: "Cinnamon Tea Bags - 20 Pack",
    price: 950,
    image: "/images/cinnamon7.png",
  },
  {
    id: 8,
    name: "Cinnamon Powder - 200g",
    price: 1700,
    image: "/images/cinnamon8.png",
  },
  {
    id: 9,
    name: "Cinnamon & Clove Spice Mix - 50g",
    price: 750,
    image: "/images/cinnamon9.png",
  },
  {
    id: 10,
    name: "Alba Cinnamon Sticks - 100g",
    price: 1250,
    image: "/images/cinnamon10.png",
  }
]
;


import { useState } from "react";

const Shop = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="shop-container">
      <div className="shop-header">
        <div>
          <Navbar />
          <h2>Our Products</h2>
          <span className="shop-sub">Pure, Authentic Ceylon Cinnamon</span>
        </div>
        <div className="shop-search">
          <input
            type="text"
            placeholder="Search ..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button aria-label="search">
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="7" stroke="#4e2e0e" strokeWidth="2" />
              <line x1="15.2" y1="15.2" x2="20" y2="20" stroke="#4e2e0e" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      <hr className="shop-divider" />
      <div className="product-grid">
        {filteredProducts.map((product, idx) => (
          <div className="product-card" key={product.id + idx}>
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-title">{product.name}</div>
            <div className="product-price">Rs.{product.price.toFixed(2)}</div>
            <div className="product-actions">
              <button className="buy-btn">Buy Now</button>
              <Cart />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
