# Cinnamon Products E-commerce Architecture

## User Roles & Permissions

### Guest User
- View products catalog
- View product details
- Book factory tours
- Fill contact us form
- Browse public content

### Registered User (Buyer)
- All guest permissions +
- User authentication (login/register)
- Add products to cart
- Place orders
- View order history
- Manage profile
- Save favorite products

### Owner (Admin)
- All registered user permissions +
- Inventory management (CRUD operations)
- Order management
- User management
- Analytics dashboard
- Factory tour bookings management
- Content management

## Technology Stack

### Frontend
- React.js with Vite
- React Router for navigation
- Context API for state management
- Axios for API calls
- React Hook Form for form handling
- Material-UI or Tailwind CSS for styling

### Backend
- Spring Boot (Java)
- Spring Security with JWT authentication
- Spring Data JPA with Hibernate
- Spring Web MVC for REST APIs
- Bean Validation for input validation
- SpringDoc OpenAPI for API documentation
- BCrypt for password hashing
- Multipart file upload support
- CORS configuration

### Database
- PostgreSQL or MySQL
- Spring Data JPA with Hibernate ORM
- Flyway or Liquibase for migrations
- HikariCP connection pooling
- Redis for caching (optional)

### DevOps
- Docker for containerization
- GitHub Actions for CI/CD
- Vercel/Netlify for frontend deployment
- AWS/Azure/GCP for backend deployment (Spring Boot JAR/WAR)

## Security Considerations
- Input validation and sanitization
- Rate limiting
- HTTPS enforcement
- Secure cookie handling
- SQL injection prevention
- XSS protection
