// User roles
export const USER_ROLES = {
  GUEST: 'guest',
  USER: 'user',
  OWNER: 'owner'
};

// API endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  VERIFY_TOKEN: '/auth/verify',
  REFRESH_TOKEN: '/auth/refresh',
  PROFILE: '/auth/profile',
  CHANGE_PASSWORD: '/auth/change-password',

  // Product endpoints
  PRODUCTS: '/products',
  PRODUCT_BY_ID: (id) => `/products/${id}`,
  CATEGORIES: '/categories',
  SEARCH_PRODUCTS: '/products/search',

  // Cart endpoints
  CART: '/cart',
  ADD_TO_CART: '/cart/add',
  UPDATE_CART: '/cart/update',
  REMOVE_FROM_CART: (id) => `/cart/remove/${id}`,
  CLEAR_CART: '/cart/clear',

  // Order endpoints
  ORDERS: '/orders',
  ORDER_BY_ID: (id) => `/orders/${id}`,
  USER_ORDERS: '/orders/user',
  CREATE_ORDER: '/orders/create',
  UPDATE_ORDER_STATUS: (id) => `/orders/${id}/status`,

  // Factory tour endpoints
  FACTORY_TOURS: '/factory-tours',
  BOOK_TOUR: '/factory-tours/book',
  TOUR_BY_ID: (id) => `/factory-tours/${id}`,

  // Contact endpoints
  CONTACT: '/contact',
  CONTACT_MESSAGES: '/contact/messages',

  // Admin endpoints
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_USERS: '/admin/users',
  ADMIN_PRODUCTS: '/admin/products',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_ANALYTICS: '/admin/analytics',
  ADMIN_INVENTORY: '/admin/inventory'
};

// Order status
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
};

// Product categories
export const PRODUCT_CATEGORIES = {
  CINNAMON_STICKS: 'cinnamon-sticks',
  CINNAMON_POWDER: 'cinnamon-powder',
  CINNAMON_OIL: 'cinnamon-oil',
  CINNAMON_BARK: 'cinnamon-bark',
  GIFT_SETS: 'gift-sets',
  ORGANIC: 'organic'
};

// Payment methods
export const PAYMENT_METHODS = {
  CREDIT_CARD: 'credit_card',
  DEBIT_CARD: 'debit_card',
  PAYPAL: 'paypal',
  BANK_TRANSFER: 'bank_transfer',
  CASH_ON_DELIVERY: 'cash_on_delivery'
};

// Currency
export const CURRENCY = {
  CODE: 'LKR',
  SYMBOL: 'Rs.',
  NAME: 'Sri Lankan Rupee'
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 50
};

// File upload
export const FILE_UPLOAD = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  ALLOWED_EXTENSIONS: ['.jpg', '.jpeg', '.png', '.webp']
};

// Validation
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^(\+94|0)[0-9]{9}$/,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50
};

// Local storage keys
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  CART: 'cart',
  THEME: 'theme',
  LANGUAGE: 'language'
};

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Internal server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  LOGIN_FAILED: 'Invalid email or password.',
  REGISTRATION_FAILED: 'Registration failed. Please try again.',
  CART_ERROR: 'Failed to update cart. Please try again.',
  ORDER_ERROR: 'Failed to place order. Please try again.'
};

// Success messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Logged in successfully!',
  REGISTRATION_SUCCESS: 'Account created successfully!',
  LOGOUT_SUCCESS: 'Logged out successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  PASSWORD_CHANGED: 'Password changed successfully!',
  CART_UPDATED: 'Cart updated successfully!',
  ORDER_PLACED: 'Order placed successfully!',
  CONTACT_SENT: 'Message sent successfully!',
  TOUR_BOOKED: 'Factory tour booked successfully!'
};

// Routes
export const ROUTES = {
  HOME: '/',
  LANDING: '/landing',
  SHOP: '/shop',
  PRODUCT_DETAIL: '/product/:id',
  ABOUT: '/about',
  CONTACT: '/contact',
  FACTORY_TOUR: '/factory-tour',
  BOOK_TOUR: '/factory-tour/book',
  
  // Auth routes
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  
  // User routes
  PROFILE: '/profile',
  CART: '/cart',
  CHECKOUT: '/checkout',
  ORDERS: '/orders',
  ORDER_DETAIL: '/orders/:id',
  FAVORITES: '/favorites',
  
  // Admin routes
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_PRODUCTS: '/admin/products',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_USERS: '/admin/users',
  ADMIN_INVENTORY: '/admin/inventory',
  ADMIN_ANALYTICS: '/admin/analytics',
  ADMIN_SETTINGS: '/admin/settings'
};

export default {
  USER_ROLES,
  API_ENDPOINTS,
  ORDER_STATUS,
  PRODUCT_CATEGORIES,
  PAYMENT_METHODS,
  CURRENCY,
  PAGINATION,
  FILE_UPLOAD,
  VALIDATION,
  STORAGE_KEYS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  ROUTES
};
