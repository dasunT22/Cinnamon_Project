# Spring Boot API Constants for Frontend

Update your constants.js to work with Spring Boot endpoints:

```javascript
// API endpoints for Spring Boot backend
export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh-token',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  PROFILE: '/auth/me',
  UPDATE_PROFILE: '/auth/profile',

  // Product endpoints
  PRODUCTS: '/products',
  PRODUCT_BY_ID: (id) => `/products/${id}`,
  CATEGORIES: '/categories',
  SEARCH_PRODUCTS: '/products/search',

  // Cart endpoints
  CART: '/cart',
  CART_ITEMS: '/cart/items',
  CART_ITEM_BY_ID: (id) => `/cart/items/${id}`,
  CLEAR_CART: '/cart/clear',

  // Order endpoints
  ORDERS: '/orders',
  ORDER_BY_ID: (id) => `/orders/${id}`,
  CREATE_ORDER: '/orders',
  UPDATE_ORDER_STATUS: (id) => `/orders/${id}/status`,

  // Factory tour endpoints
  FACTORY_TOURS: '/factory-tours',
  ADMIN_FACTORY_TOURS: '/admin/factory-tours',
  ADMIN_FACTORY_TOUR_BY_ID: (id) => `/admin/factory-tours/${id}`,

  // Contact endpoints
  CONTACT: '/contact',
  ADMIN_CONTACT_MESSAGES: '/admin/contact-messages',

  // Admin endpoints
  ADMIN_DASHBOARD: '/admin/dashboard/stats',
  ADMIN_USERS: '/admin/users',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_ANALYTICS_SALES: '/admin/analytics/sales',
  ADMIN_ANALYTICS_CUSTOMERS: '/admin/analytics/customers'
};
```

Key differences when working with Spring Boot:

1. **Port**: Default Spring Boot port is 8080 (vs 5000 for Node.js)
2. **Path Parameters**: Use `/products/{id}` instead of `/products/:id`
3. **Standard REST**: Follow RESTful conventions more strictly
4. **Error Handling**: Spring Boot returns standardized error responses
5. **Content Type**: Spring Boot expects and returns JSON by default
6. **CORS**: Configure CORS in Spring Boot security config
7. **Authentication**: JWT tokens work similarly but with Spring Security
