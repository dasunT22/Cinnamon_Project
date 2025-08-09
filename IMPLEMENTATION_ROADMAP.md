# Implementation Roadmap

## Phase 1: Basic Setup & Authentication (Week 1-2)

### 1.1 Project Setup
- [x] Initialize React project with Vite
- [x] Set up file structure
- [x] Install dependencies
- [ ] Initialize Spring Boot project
- [ ] Configure database (PostgreSQL/MySQL)
- [ ] Set up Flyway migrations
- [ ] Configure environment variables

### 1.2 Spring Boot Backend Setup
- [ ] Create Spring Boot application with Maven
- [ ] Configure Spring Security
- [ ] Set up JWT authentication
- [ ] Create User entity and repository
- [ ] Implement authentication endpoints
- [ ] Configure CORS for React frontend

### 1.3 Authentication System
- [x] Create AuthContext (React)
- [x] Create AuthService (React)
- [x] Create ProtectedRoute component
- [ ] Implement Login/Register pages
- [ ] Connect frontend to Spring Boot backend
- [ ] Add JWT token handling
- [ ] Set up password reset functionality

### 1.3 Basic UI Components
- [ ] Create common components (Header, Footer, Navbar)
- [ ] Set up routing with React Router
- [ ] Create basic layout structure
- [ ] Add responsive design with CSS Grid/Flexbox

## Phase 2: Product Management (Week 3-4)

### 2.1 Backend Product API
- [ ] Create Product and Category entities
- [ ] Implement ProductRepository and CategoryRepository
- [ ] Create ProductService with CRUD operations
- [ ] Implement ProductController with REST endpoints
- [ ] Add file upload service for product images
- [ ] Add pagination and search functionality

### 2.2 Frontend Product Display
- [ ] Create ProductCard component
- [ ] Create ProductGrid component
- [ ] Implement product search and filtering
- [ ] Add product detail page
- [ ] Create product categories
- [ ] Connect to Spring Boot API

### 2.3 Shopping Cart
- [x] Create CartContext (React)
- [ ] Create Cart and CartItem entities (Spring Boot)
- [ ] Implement CartService and CartController
- [ ] Implement cart functionality (add, remove, update)
- [ ] Create cart page with checkout
- [ ] Add cart persistence (database + localStorage)

### 2.3 Guest User Features
- [ ] Product browsing without authentication
- [ ] Factory tour booking form
- [ ] Contact us form
- [ ] Basic product search

## Phase 3: User Features (Week 5-6)

### 3.1 Backend User Management
- [ ] Create Order and OrderItem entities
- [ ] Implement OrderService and OrderController
- [ ] Add email service for notifications
- [ ] Create user profile endpoints
- [ ] Implement order history functionality

### 3.2 Frontend User Features
- [ ] User registration with email verification
- [ ] User profile management
- [ ] Order history page
- [ ] Favorite products functionality
- [ ] Order placement and confirmation

### 3.3 Enhanced Shopping Experience
- [ ] Wishlist functionality
- [ ] Product reviews and ratings (entities + API)
- [ ] Recently viewed products
- [ ] Product recommendations

## Phase 4: Owner/Admin Features (Week 7-8)

### 4.1 Backend Admin API
- [ ] Create admin-specific controllers
- [ ] Implement role-based access control
- [ ] Add analytics service
- [ ] Create inventory management endpoints
- [ ] Implement order management API

### 4.2 Frontend Admin Dashboard
- [ ] Admin dashboard with analytics
- [ ] User management interface
- [ ] Order overview and management
- [ ] Inventory alerts and notifications

### 4.3 Inventory Management
- [ ] Product CRUD operations
- [ ] Category management
- [ ] Stock tracking
- [ ] Bulk product import/export

## Phase 5: Advanced Features (Week 9-10)

### 5.1 Factory Tours
- [ ] Create FactoryTour entity and API
- [ ] Tour schedule management backend
- [ ] Booking confirmation system
- [ ] Email notifications for bookings
- [ ] Admin interface for tour management

### 5.2 Content Management
- [ ] Dynamic page content API
- [ ] Contact form backend
- [ ] File upload and management
- [ ] Email template system

### 5.3 Analytics & Reporting
- [ ] Sales reports API
- [ ] Customer analytics
- [ ] Inventory reports
- [ ] Performance metrics dashboard

## Technical Implementation Details

### Database Schema
```sql
-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    role VARCHAR(20) DEFAULT 'user',
    email_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER DEFAULT 0,
    category_id INTEGER REFERENCES categories(id),
    image_url VARCHAR(500),
    images JSONB,
    weight DECIMAL(8,2),
    unit VARCHAR(20),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    shipping_address JSONB NOT NULL,
    billing_address JSONB,
    payment_method VARCHAR(50),
    payment_status VARCHAR(50) DEFAULT 'pending',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order items table
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    total_price DECIMAL(10,2) NOT NULL
);

-- Cart table
CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cart items table
CREATE TABLE cart_items (
    id SERIAL PRIMARY KEY,
    cart_id INTEGER REFERENCES cart(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Factory tours table
CREATE TABLE factory_tours (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    preferred_date DATE,
    preferred_time TIME,
    number_of_guests INTEGER DEFAULT 1,
    special_requirements TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact messages table
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Spring Boot API Endpoints Structure
```
# Authentication & User Management
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh-token
GET    /api/auth/me
PUT    /api/auth/profile
POST   /api/auth/forgot-password
POST   /api/auth/reset-password

# Products & Categories
GET    /api/products
GET    /api/products/{id}
POST   /api/products (admin only)
PUT    /api/products/{id} (admin only)
DELETE /api/products/{id} (admin only)
GET    /api/products/search?q={query}
GET    /api/categories
POST   /api/categories (admin only)

# Shopping Cart
GET    /api/cart (authenticated)
POST   /api/cart/items (authenticated)
PUT    /api/cart/items/{id} (authenticated)
DELETE /api/cart/items/{id} (authenticated)
DELETE /api/cart/clear (authenticated)

# Orders
POST   /api/orders (authenticated)
GET    /api/orders (authenticated)
GET    /api/orders/{id} (authenticated)
PUT    /api/orders/{id}/status (admin only)
GET    /api/admin/orders (admin only)

# Factory Tours
POST   /api/factory-tours
GET    /api/admin/factory-tours (admin only)
PUT    /api/admin/factory-tours/{id} (admin only)

# Contact & Support
POST   /api/contact
GET    /api/admin/contact-messages (admin only)

# Admin Dashboard
GET    /api/admin/dashboard/stats
GET    /api/admin/analytics/sales
GET    /api/admin/analytics/customers
GET    /api/admin/users (admin only)
```

### Security Considerations
1. **Input Validation**: Validate all inputs on both client and server
2. **Authentication**: JWT tokens with refresh mechanism
3. **Authorization**: Role-based access control
4. **Data Sanitization**: Prevent XSS and SQL injection
5. **Rate Limiting**: Prevent abuse of API endpoints
6. **HTTPS**: Encrypt data in transit
7. **Environment Variables**: Store sensitive data securely

### Performance Optimization
1. **Image Optimization**: Compress and lazy load images
2. **Code Splitting**: Split React bundles by routes
3. **Caching**: Implement Redis caching for frequently accessed data
4. **Database Indexing**: Add indexes on frequently queried columns
5. **CDN**: Use CDN for static assets
6. **Pagination**: Implement pagination for large datasets

### Testing Strategy
1. **Unit Tests**: Test individual components and functions
2. **Integration Tests**: Test API endpoints and database operations
3. **E2E Tests**: Test complete user workflows
4. **Load Testing**: Test application under load
5. **Security Testing**: Test for vulnerabilities

### Deployment Plan
1. **Development**: Local development environment
2. **Staging**: Deploy to staging environment for testing
3. **Production**: Deploy to production with monitoring
4. **CI/CD**: Set up automated deployment pipeline
5. **Monitoring**: Add error tracking and performance monitoring
