# E-commerce Backend

This is the backend API for the E-commerce website built with Node.js, Express, and Prisma.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the example environment file and update values:

   ```bash
   cp .env.example .env
   ```

   - For local development, use SQLite with `DATABASE_URL="file:./dev.db"`
   - Set `JWT_SECRET` and `STRIPE_SECRET_KEY` to development values

3. Generate Prisma client:

   ```bash
   npm run db:generate
   ```

4. Run database migrations:

   ```bash
   npm run db:migrate
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID

### Cart

- `GET /api/cart` - Get user's cart (requires auth)
- `POST /api/cart/add` - Add item to cart (requires auth)

### Orders

- `POST /api/orders` - Create order from cart (requires auth)
- `GET /api/orders` - Get user's orders (requires auth)

### Payments

- `POST /api/create-payment-intent` - Create Stripe payment intent (requires auth)

## Environment Variables

- `DATABASE_URL` - PostgreSQL database URL
- `JWT_SECRET` - Secret key for JWT tokens
- `STRIPE_SECRET_KEY` - Stripe secret key for payments
- `PORT` - Server port (default: 5000)
