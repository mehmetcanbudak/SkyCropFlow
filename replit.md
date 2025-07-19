# Skycrops E-commerce Application

## Overview

This is a full-stack e-commerce application for Skycrops, a vertical farming company that sells fresh living vegetables. The application features a modern React frontend with a Node.js/Express backend, using PostgreSQL with Drizzle ORM for data management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and building

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **API Style**: REST API
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured for Neon)

### Project Structure
```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route components
│   │   └── lib/          # Utilities and configuration
├── server/               # Backend Express application
├── shared/               # Shared code between client and server
│   └── schema.ts         # Database schema and types
└── migrations/           # Database migration files
```

## Key Components

### Database Schema
The application uses four main entities:
- **Products**: Core product information with pricing, categories, and flags
- **Categories**: Product categorization with styling metadata
- **Articles**: Blog/journal content for marketing
- **Newsletters**: Email subscription management

### API Endpoints
- `GET /api/products` - Fetch all products
- `GET /api/products/featured` - Get featured products
- `GET /api/products/top-sales` - Get bestselling products  
- `GET /api/products/category/:category` - Filter by category
- `GET /api/products/:slug` - Get single product
- `GET /api/categories` - Fetch all categories
- `GET /api/articles` - Fetch all articles
- `GET /api/articles/:slug` - Get single article
- `POST /api/newsletter/subscribe` - Newsletter subscription

### Admin API Endpoints (Content Management)
- `POST /api/admin/articles` - Create new article
- `PUT /api/admin/articles/:id` - Update existing article
- `DELETE /api/admin/articles/:id` - Delete article
- `POST /api/admin/products` - Create new product
- `PUT /api/admin/products/:id` - Update existing product
- `DELETE /api/admin/products/:id` - Delete product

### UI Components
- **Navigation**: Responsive navbar with mobile menu
- **Product Display**: Product cards with featured layout options
- **Category Browser**: Visual category grid with color coding
- **Newsletter Signup**: Email collection with form validation
- **Social Integration**: Instagram feed display
- **Journal System**: Article list and individual article pages with Teaflow-inspired design
- **Admin Panel**: Complete content management system for articles and products (/admin)

## Data Flow

1. **Client Requests**: React components use TanStack Query to fetch data
2. **API Layer**: Express routes handle requests and call storage layer
3. **Data Storage**: PostgreSQL database with Drizzle ORM (DatabaseStorage class)
4. **Response**: JSON data returned to client for rendering

The application uses PostgreSQL for persistent data storage with automatic database seeding on startup.

## External Dependencies

### Frontend Dependencies
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with custom CSS variables
- **Data Fetching**: TanStack Query for caching and synchronization
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React icon library

### Backend Dependencies
- **Database**: Neon PostgreSQL with connection pooling
- **ORM**: Drizzle ORM with Zod schema validation
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: tsx for TypeScript execution, esbuild for production builds

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx for running TypeScript directly
- **Database**: Drizzle Kit for schema management and migrations

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Deployment**: Single Node.js process serves both API and static files

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)
- Development includes Replit-specific tooling and error overlays

## Recent Changes (July 19, 2025)

### Philosophy Section & Bundles Update  
- **Philosophy Migration**: Moved philosophy section from home page to about us page
- **Bundles Section**: Replaced "top sales" section with 3 curated vegetable bundles (Fresh Greens, Garden Mix, Family Pack)
- **Bundle Features**: Each bundle includes savings badges, detailed descriptions, and pricing

### Subscription & Delivery System
- **Delivery Modal**: Advanced subscription and delivery timing system for all products and bundles
- **Subscription Plans**: One-time, weekly (10% off), monthly (15% off), yearly (25% off) options
- **Delivery Options**: Express (same day), Standard (1-2 days), Scheduled (3-5 days, free)
- **Cart Integration**: Enhanced shopping cart with subscription metadata support
- **Product Integration**: All product pages and bundle cards use the new delivery selection system

### Database Schema Updates
- **Bundles Table**: Added bundles schema with products array, savings, and pricing
- **Cart Metadata**: Enhanced cart system to store subscription and delivery preferences
- **Database Migration**: Successfully pushed schema changes to PostgreSQL

The application now offers a complete subscription-based e-commerce experience with flexible delivery options, matching modern subscription box services while maintaining the clean Teaflow aesthetic.