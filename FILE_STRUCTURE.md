# Enhanced File Structure for Cinnamon E-commerce Project

```
cinnamon-ecommerce/
├── frontend/                           # React.js Frontend
│   ├── public/
│   │   ├── images/
│   │   │   ├── products/              # Product images
│   │   │   ├── about.png
│   │   │   ├── factoryTour.png
│   │   │   ├── home_new.png
│   │   │   ├── logo_new.png
│   │   │   └── vite.svg
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/                # Reusable components
│   │   │   │   ├── Header/
│   │   │   │   │   ├── Header.jsx
│   │   │   │   │   └── Header.css
│   │   │   │   ├── Footer/
│   │   │   │   │   ├── Footer.jsx
│   │   │   │   │   └── Footer.css
│   │   │   │   ├── Navbar/
│   │   │   │   │   ├── Navbar.jsx
│   │   │   │   │   └── Navbar.css
│   │   │   │   ├── LoadingSpinner/
│   │   │   │   ├── ErrorBoundary/
│   │   │   │   └── Modal/
│   │   │   ├── auth/                  # Authentication components
│   │   │   │   ├── LoginForm/
│   │   │   │   │   ├── LoginForm.jsx
│   │   │   │   │   └── LoginForm.css
│   │   │   │   ├── RegisterForm/
│   │   │   │   ├── ForgotPassword/
│   │   │   │   └── ProtectedRoute/
│   │   │   ├── products/              # Product-related components
│   │   │   │   ├── ProductCard/
│   │   │   │   ├── ProductGrid/
│   │   │   │   ├── ProductDetails/
│   │   │   │   ├── ProductSearch/
│   │   │   │   └── ProductFilter/
│   │   │   ├── cart/                  # Cart components
│   │   │   │   ├── Cart/
│   │   │   │   │   ├── Cart.jsx
│   │   │   │   │   └── Cart.css
│   │   │   │   ├── CartItem/
│   │   │   │   └── Checkout/
│   │   │   ├── orders/                # Order components
│   │   │   │   ├── OrderHistory/
│   │   │   │   ├── OrderDetails/
│   │   │   │   └── OrderStatus/
│   │   │   ├── admin/                 # Admin-only components
│   │   │   │   ├── Dashboard/
│   │   │   │   ├── InventoryManager/
│   │   │   │   ├── OrderManager/
│   │   │   │   ├── UserManager/
│   │   │   │   └── Analytics/
│   │   │   └── forms/                 # Form components
│   │   │       ├── ContactForm/
│   │   │       ├── BookingForm/
│   │   │       └── ProfileForm/
│   │   ├── pages/
│   │   │   ├── public/                # Public pages (Guest accessible)
│   │   │   │   ├── Home/
│   │   │   │   │   ├── Home.jsx
│   │   │   │   │   └── Home.css
│   │   │   │   ├── Landing/
│   │   │   │   │   ├── Landing.jsx
│   │   │   │   │   └── Landing.css
│   │   │   │   ├── Shop/
│   │   │   │   │   ├── Shop.jsx
│   │   │   │   │   └── Shop.css
│   │   │   │   ├── AboutUs/
│   │   │   │   │   ├── AboutUs.jsx
│   │   │   │   │   └── AboutUs.css
│   │   │   │   ├── ContactUs/
│   │   │   │   │   ├── ContactUs.jsx
│   │   │   │   │   └── ContactUs.css
│   │   │   │   ├── FactoryTour/
│   │   │   │   │   ├── FactoryTour.jsx
│   │   │   │   │   ├── FactoryTour.css
│   │   │   │   │   ├── Booking.jsx
│   │   │   │   │   ├── Booking.css
│   │   │   │   │   ├── Details.jsx
│   │   │   │   │   └── Confirmation.jsx
│   │   │   │   └── ProductDetail/
│   │   │   ├── auth/                  # Authentication pages
│   │   │   │   ├── Login/
│   │   │   │   ├── Register/
│   │   │   │   └── ForgotPassword/
│   │   │   ├── user/                  # Registered user pages
│   │   │   │   ├── Profile/
│   │   │   │   ├── Cart/
│   │   │   │   │   ├── Cart.jsx
│   │   │   │   │   └── Cart.css
│   │   │   │   ├── Checkout/
│   │   │   │   ├── Orders/
│   │   │   │   └── Favorites/
│   │   │   └── admin/                 # Admin pages
│   │   │       ├── Dashboard/
│   │   │       ├── Products/
│   │   │       ├── Orders/
│   │   │       ├── Users/
│   │   │       ├── Inventory/
│   │   │       └── Settings/
│   │   ├── context/                   # Context providers
│   │   │   ├── AuthContext.jsx
│   │   │   ├── CartContext.jsx
│   │   │   ├── ProductContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   ├── hooks/                     # Custom hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useCart.js
│   │   │   ├── useApi.js
│   │   │   └── useLocalStorage.js
│   │   ├── services/                  # API services
│   │   │   ├── api.js
│   │   │   ├── auth.service.js
│   │   │   ├── product.service.js
│   │   │   ├── cart.service.js
│   │   │   ├── order.service.js
│   │   │   └── user.service.js
│   │   ├── utils/                     # Utility functions
│   │   │   ├── constants.js
│   │   │   ├── helpers.js
│   │   │   ├── validation.js
│   │   │   └── formatters.js
│   │   ├── styles/                    # Global styles
│   │   │   ├── globals.css
│   │   │   ├── variables.css
│   │   │   └── components.css
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   └── react.svg
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── README.md
│
├── backend/                           # Node.js Backend
│   ├── src/
│   │   ├── controllers/              # Route controllers
│   │   │   ├── auth.controller.js
│   │   │   ├── product.controller.js
│   │   │   ├── cart.controller.js
│   │   │   ├── order.controller.js
│   │   │   ├── user.controller.js
│   │   │   ├── admin.controller.js
│   │   │   └── factoryTour.controller.js
│   │   ├── models/                   # Database models
│   │   │   ├── User.js
│   │   │   ├── Product.js
│   │   │   ├── Category.js
│   │   │   ├── Order.js
│   │   │   ├── OrderItem.js
│   │   │   ├── Cart.js
│   │   │   ├── CartItem.js
│   │   │   ├── FactoryTour.js
│   │   │   └── Contact.js
│   │   ├── routes/                   # API routes
│   │   │   ├── auth.routes.js
│   │   │   ├── product.routes.js
│   │   │   ├── cart.routes.js
│   │   │   ├── order.routes.js
│   │   │   ├── user.routes.js
│   │   │   ├── admin.routes.js
│   │   │   └── factoryTour.routes.js
│   │   ├── middleware/               # Custom middleware
│   │   │   ├── auth.middleware.js
│   │   │   ├── role.middleware.js
│   │   │   ├── validation.middleware.js
│   │   │   ├── upload.middleware.js
│   │   │   └── error.middleware.js
│   │   ├── services/                 # Business logic
│   │   │   ├── auth.service.js
│   │   │   ├── product.service.js
│   │   │   ├── cart.service.js
│   │   │   ├── order.service.js
│   │   │   ├── email.service.js
│   │   │   └── payment.service.js
│   │   ├── utils/                    # Utility functions
│   │   │   ├── database.js
│   │   │   ├── jwt.js
│   │   │   ├── bcrypt.js
│   │   │   ├── validation.js
│   │   │   └── constants.js
│   │   ├── config/                   # Configuration files
│   │   │   ├── database.config.js
│   │   │   ├── auth.config.js
│   │   │   └── app.config.js
│   │   └── app.js                    # Express app setup
│   ├── uploads/                      # File uploads
│   │   ├── products/
│   │   └── profiles/
│   ├── tests/                        # Test files
│   │   ├── unit/
│   │   ├── integration/
│   │   └── e2e/
│   ├── package.json
│   ├── .env.example
│   └── server.js                     # Server entry point
│
├── database/                         # Database files
│   ├── migrations/
│   ├── seeds/
│   └── schema.sql
│
├── shared/                           # Shared utilities
│   ├── types/
│   ├── constants/
│   └── validators/
│
├── docs/                            # Documentation
│   ├── api/
│   ├── setup/
│   └── architecture/
│
├── scripts/                         # Build/deployment scripts
│   ├── build.sh
│   ├── deploy.sh
│   └── setup.sh
│
├── .gitignore
├── docker-compose.yml
├── Dockerfile
└── README.md
```

## Key Architecture Decisions

### 1. **Role-Based Access Control (RBAC)**
- Implement middleware to check user roles
- Protected routes based on user permissions
- Different UI components for different roles

### 2. **State Management**
- Context API for global state (auth, cart, theme)
- Local state for component-specific data
- Custom hooks for reusable logic

### 3. **API Design**
- RESTful API endpoints
- JWT-based authentication
- Role-based authorization middleware
- Input validation and sanitization

### 4. **Database Schema**
```sql
Users (id, email, password, role, created_at, updated_at)
Products (id, name, description, price, stock, category_id, image_url, created_at)
Categories (id, name, description)
Orders (id, user_id, total, status, created_at)
OrderItems (id, order_id, product_id, quantity, price)
Cart (id, user_id, created_at)
CartItems (id, cart_id, product_id, quantity)
FactoryTours (id, name, email, phone, date, time, guests, status)
```

### 5. **Security Features**
- Password hashing with bcrypt
- JWT tokens with expiration
- Input validation
- CORS configuration
- Rate limiting
- File upload restrictions
