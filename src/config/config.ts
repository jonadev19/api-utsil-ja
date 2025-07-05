// Application configuration constants
export const config = {
  // Server configuration
  server: {
    port: 3000,
    environment: 'development',
  },
  
  // Database configuration
  database: {
    host: 'localhost',
    port: 5432,
    name: 'mydb',
    user: 'user',
  },
  
  // API configuration
  api: {
    prefix: '/api',
    version: '1.0',
  },
  
  // Security configuration
  security: {
    jwtSecret: 'your-secret-key',
    passwordSaltRounds: 10,
  },
};
