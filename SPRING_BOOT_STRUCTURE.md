# Spring Boot Backend File Structure

## Complete Project Structure with Spring Boot Backend

```
cinnamon-ecommerce/
├── frontend/                           # React.js Frontend (existing)
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── ...
│
├── backend/                           # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── cinnamon/
│   │   │   │           └── ecommerce/
│   │   │   │               ├── CinnamonEcommerceApplication.java
│   │   │   │               ├── config/
│   │   │   │               │   ├── SecurityConfig.java
│   │   │   │               │   ├── JwtConfig.java
│   │   │   │               │   ├── CorsConfig.java
│   │   │   │               │   ├── DatabaseConfig.java
│   │   │   │               │   └── SwaggerConfig.java
│   │   │   │               ├── controller/
│   │   │   │               │   ├── AuthController.java
│   │   │   │               │   ├── ProductController.java
│   │   │   │               │   ├── CartController.java
│   │   │   │               │   ├── OrderController.java
│   │   │   │               │   ├── UserController.java
│   │   │   │               │   ├── AdminController.java
│   │   │   │               │   ├── FactoryTourController.java
│   │   │   │               │   └── ContactController.java
│   │   │   │               ├── dto/
│   │   │   │               │   ├── auth/
│   │   │   │               │   │   ├── LoginRequest.java
│   │   │   │               │   │   ├── RegisterRequest.java
│   │   │   │               │   │   ├── AuthResponse.java
│   │   │   │               │   │   └── UserDto.java
│   │   │   │               │   ├── product/
│   │   │   │               │   │   ├── ProductDto.java
│   │   │   │               │   │   ├── ProductRequest.java
│   │   │   │               │   │   └── CategoryDto.java
│   │   │   │               │   ├── cart/
│   │   │   │               │   │   ├── CartDto.java
│   │   │   │               │   │   ├── CartItemDto.java
│   │   │   │               │   │   └── AddToCartRequest.java
│   │   │   │               │   ├── order/
│   │   │   │               │   │   ├── OrderDto.java
│   │   │   │               │   │   ├── OrderRequest.java
│   │   │   │               │   │   ├── OrderItemDto.java
│   │   │   │               │   │   └── OrderStatusRequest.java
│   │   │   │               │   └── common/
│   │   │   │               │       ├── ApiResponse.java
│   │   │   │               │       ├── PagedResponse.java
│   │   │   │               │       └── ErrorResponse.java
│   │   │   │               ├── entity/
│   │   │   │               │   ├── User.java
│   │   │   │               │   ├── Role.java
│   │   │   │               │   ├── Product.java
│   │   │   │               │   ├── Category.java
│   │   │   │               │   ├── Cart.java
│   │   │   │               │   ├── CartItem.java
│   │   │   │               │   ├── Order.java
│   │   │   │               │   ├── OrderItem.java
│   │   │   │               │   ├── FactoryTour.java
│   │   │   │               │   ├── Contact.java
│   │   │   │               │   └── BaseEntity.java
│   │   │   │               ├── repository/
│   │   │   │               │   ├── UserRepository.java
│   │   │   │               │   ├── RoleRepository.java
│   │   │   │               │   ├── ProductRepository.java
│   │   │   │               │   ├── CategoryRepository.java
│   │   │   │               │   ├── CartRepository.java
│   │   │   │               │   ├── CartItemRepository.java
│   │   │   │               │   ├── OrderRepository.java
│   │   │   │               │   ├── OrderItemRepository.java
│   │   │   │               │   ├── FactoryTourRepository.java
│   │   │   │               │   └── ContactRepository.java
│   │   │   │               ├── service/
│   │   │   │               │   ├── AuthService.java
│   │   │   │               │   ├── UserService.java
│   │   │   │               │   ├── ProductService.java
│   │   │   │               │   ├── CartService.java
│   │   │   │               │   ├── OrderService.java
│   │   │   │               │   ├── FactoryTourService.java
│   │   │   │               │   ├── ContactService.java
│   │   │   │               │   ├── EmailService.java
│   │   │   │               │   ├── FileUploadService.java
│   │   │   │               │   └── PaymentService.java
│   │   │   │               ├── service/impl/
│   │   │   │               │   ├── AuthServiceImpl.java
│   │   │   │               │   ├── UserServiceImpl.java
│   │   │   │               │   ├── ProductServiceImpl.java
│   │   │   │               │   ├── CartServiceImpl.java
│   │   │   │               │   ├── OrderServiceImpl.java
│   │   │   │               │   ├── FactoryTourServiceImpl.java
│   │   │   │               │   ├── ContactServiceImpl.java
│   │   │   │               │   ├── EmailServiceImpl.java
│   │   │   │               │   ├── FileUploadServiceImpl.java
│   │   │   │               │   └── PaymentServiceImpl.java
│   │   │   │               ├── security/
│   │   │   │               │   ├── JwtAuthenticationEntryPoint.java
│   │   │   │               │   ├── JwtAuthenticationFilter.java
│   │   │   │               │   ├── JwtTokenProvider.java
│   │   │   │               │   ├── UserPrincipal.java
│   │   │   │               │   └── CustomUserDetailsService.java
│   │   │   │               ├── exception/
│   │   │   │               │   ├── GlobalExceptionHandler.java
│   │   │   │               │   ├── ResourceNotFoundException.java
│   │   │   │               │   ├── BadRequestException.java
│   │   │   │               │   ├── UnauthorizedException.java
│   │   │   │               │   └── AppException.java
│   │   │   │               ├── util/
│   │   │   │               │   ├── AppConstants.java
│   │   │   │               │   ├── ModelMapper.java
│   │   │   │               │   ├── ValidationUtils.java
│   │   │   │               │   └── DateUtils.java
│   │   │   │               └── validation/
│   │   │   │                   ├── EmailValidator.java
│   │   │   │                   ├── PasswordValidator.java
│   │   │   │                   └── PhoneValidator.java
│   │   │   └── resources/
│   │   │       ├── application.yml
│   │   │       ├── application-dev.yml
│   │   │       ├── application-prod.yml
│   │   │       ├── db/migration/
│   │   │       │   ├── V1__Create_users_table.sql
│   │   │       │   ├── V2__Create_roles_table.sql
│   │   │       │   ├── V3__Create_categories_table.sql
│   │   │       │   ├── V4__Create_products_table.sql
│   │   │       │   ├── V5__Create_cart_tables.sql
│   │   │       │   ├── V6__Create_order_tables.sql
│   │   │       │   ├── V7__Create_factory_tour_table.sql
│   │   │       │   └── V8__Create_contact_table.sql
│   │   │       ├── static/
│   │   │       │   └── uploads/
│   │   │       └── templates/
│   │   │           ├── email/
│   │   │           │   ├── welcome.html
│   │   │           │   ├── order-confirmation.html
│   │   │           │   └── password-reset.html
│   │   │           └── reports/
│   │   └── test/
│   │       └── java/
│   │           └── com/
│   │               └── cinnamon/
│   │                   └── ecommerce/
│   │                       ├── CinnamonEcommerceApplicationTests.java
│   │                       ├── controller/
│   │                       │   ├── AuthControllerTest.java
│   │                       │   ├── ProductControllerTest.java
│   │                       │   └── ...
│   │                       ├── service/
│   │                       │   ├── AuthServiceTest.java
│   │                       │   ├── ProductServiceTest.java
│   │                       │   └── ...
│   │                       └── repository/
│   │                           ├── UserRepositoryTest.java
│   │                           ├── ProductRepositoryTest.java
│   │                           └── ...
│   ├── target/                         # Build output
│   ├── pom.xml                         # Maven dependencies
│   ├── Dockerfile
│   └── README.md
│
├── docker-compose.yml                  # Docker compose for full stack
├── .gitignore
└── README.md
```

## Key Spring Boot Dependencies (pom.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.0</version>
        <relativePath/>
    </parent>
    
    <groupId>com.cinnamon</groupId>
    <artifactId>cinnamon-ecommerce</artifactId>
    <version>1.0.0</version>
    <name>cinnamon-ecommerce</name>
    <description>Cinnamon E-commerce Application</description>
    
    <properties>
        <java.version>17</java.version>
    </properties>
    
    <dependencies>
        <!-- Spring Boot Starters -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-mail</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-cache</artifactId>
        </dependency>
        
        <!-- Database -->
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>
        
        <!-- Alternative: MySQL -->
        <!--
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
        </dependency>
        -->
        
        <!-- JWT -->
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-api</artifactId>
            <version>0.11.5</version>
        </dependency>
        
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-impl</artifactId>
            <version>0.11.5</version>
            <scope>runtime</scope>
        </dependency>
        
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-jackson</artifactId>
            <version>0.11.5</version>
            <scope>runtime</scope>
        </dependency>
        
        <!-- Flyway for database migrations -->
        <dependency>
            <groupId>org.flywaydb</groupId>
            <artifactId>flyway-core</artifactId>
        </dependency>
        
        <!-- SpringDoc OpenAPI (Swagger) -->
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>2.1.0</version>
        </dependency>
        
        <!-- ModelMapper for DTO mapping -->
        <dependency>
            <groupId>org.modelmapper</groupId>
            <artifactId>modelmapper</artifactId>
            <version>3.1.1</version>
        </dependency>
        
        <!-- Lombok for reducing boilerplate code -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        
        <!-- Testing -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-test</artifactId>
            <scope>test</scope>
        </dependency>
        
        <!-- H2 Database for testing -->
        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
            
            <plugin>
                <groupId>org.flywaydb</groupId>
                <artifactId>flyway-maven-plugin</artifactId>
                <configuration>
                    <url>jdbc:postgresql://localhost:5432/cinnamon_ecommerce</url>
                    <user>postgres</user>
                    <password>password</password>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

## Application Configuration (application.yml)

```yaml
server:
  port: 8080
  servlet:
    context-path: /api

spring:
  application:
    name: cinnamon-ecommerce
  
  # Database Configuration
  datasource:
    url: jdbc:postgresql://localhost:5432/cinnamon_ecommerce
    username: ${DB_USERNAME:postgres}
    password: ${DB_PASSWORD:password}
    driver-class-name: org.postgresql.Driver
  
  # JPA Configuration
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
        format_sql: true
  
  # Flyway Configuration
  flyway:
    enabled: true
    baseline-on-migrate: true
    locations: classpath:db/migration
  
  # File Upload Configuration
  servlet:
    multipart:
      max-file-size: 5MB
      max-request-size: 10MB
  
  # Email Configuration
  mail:
    host: smtp.gmail.com
    port: 587
    username: ${MAIL_USERNAME}
    password: ${MAIL_PASSWORD}
    properties:
      mail:
        smtp:
          auth: true
          starttls:
            enable: true

# JWT Configuration
app:
  jwt:
    secret: ${JWT_SECRET:mySecretKey}
    expiration: 86400000 # 24 hours
    refresh-expiration: 604800000 # 7 days

# File Storage Configuration
file:
  upload-dir: ./uploads

# CORS Configuration
cors:
  allowed-origins: ${CORS_ORIGINS:http://localhost:3000,http://localhost:5173}
  allowed-methods: GET,POST,PUT,DELETE,OPTIONS
  allowed-headers: "*"
  allow-credentials: true

# Logging Configuration
logging:
  level:
    com.cinnamon.ecommerce: DEBUG
    org.springframework.security: DEBUG
  pattern:
    console: "%d{yyyy-MM-dd HH:mm:ss} - %msg%n"

# Management endpoints
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
  endpoint:
    health:
      show-details: when-authorized
```

## Key Differences from Node.js Backend

### 1. **Strong Typing**
- Java's type system provides compile-time error checking
- Better IDE support with autocompletion and refactoring

### 2. **Spring Ecosystem**
- **Spring Security**: Robust authentication and authorization
- **Spring Data JPA**: Simplified database operations
- **Spring Boot Actuator**: Production-ready monitoring
- **Spring Boot Test**: Comprehensive testing framework

### 3. **Enterprise Features**
- Built-in connection pooling
- Transaction management
- Caching support
- Health checks and metrics

### 4. **Performance**
- JVM optimizations
- Better memory management
- Efficient garbage collection
- Native compilation with GraalVM (optional)

### 5. **Development Workflow**
- Maven/Gradle for dependency management
- Built-in DevTools for hot reloading
- Comprehensive testing framework
- Production-ready packaging (JAR/WAR)

This Spring Boot backend will provide a robust, scalable, and maintainable foundation for your cinnamon e-commerce platform with enterprise-grade features and security.
