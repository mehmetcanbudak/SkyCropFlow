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
- `POST /api/newsletter/subscribe` - Newsletter subscription

### UI Components
- **Navigation**: Responsive navbar with mobile menu
- **Product Display**: Product cards with featured layout options
- **Category Browser**: Visual category grid with color coding
- **Newsletter Signup**: Email collection with form validation
- **Social Integration**: Instagram feed display

## Data Flow

1. **Client Requests**: React components use TanStack Query to fetch data
2. **API Layer**: Express routes handle requests and call storage layer
3. **Data Storage**: Currently uses in-memory storage (MemStorage class)
4. **Response**: JSON data returned to client for rendering

The application is designed to easily switch from memory storage to database storage using the IStorage interface.

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

The application follows a monorepo structure with shared TypeScript types between frontend and backend, ensuring type safety across the full stack. The modular architecture allows for easy testing and future scalability.