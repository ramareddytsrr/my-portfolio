# Overview

This is a full-stack portfolio web application built with a React frontend and Express.js backend. The project uses Drizzle ORM with PostgreSQL for data persistence and features a modern tech stack with TypeScript, Tailwind CSS, and Radix UI components. The application showcases a developer's portfolio with sections for experience, projects, skills, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React 18 with TypeScript, built using Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state management
- **Build Tool**: Vite for development and production builds

## Key Components

### Frontend Architecture
- **Component Structure**: Organized into sections (Hero, About, Experience, Projects, Skills, Contact) and reusable components
- **Styling**: Tailwind CSS with a dark theme implementation and CSS variables for consistent theming
- **Animations**: Framer Motion for smooth animations and transitions
- **Navigation**: Smooth scrolling with intersection observer for active section detection
- **Theme System**: Dark/light theme toggle with persistent state

### Backend Architecture
- **Express Server**: RESTful API structure with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development
- **Development Setup**: Vite integration for hot reload in development mode

### Shared Components
- **Schema Definition**: Centralized database schema using Drizzle with Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Client Requests**: React components make API calls to Express endpoints
2. **Server Processing**: Express routes handle requests and interact with the storage layer
3. **Data Persistence**: Storage layer abstracts database operations using Drizzle ORM
4. **Response Handling**: React Query manages API responses and caching on the frontend

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm & drizzle-kit**: Type-safe ORM and database toolkit
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **lucide-react**: Icon library

### UI Components
- **@radix-ui/***: Unstyled, accessible UI primitives
- **shadcn/ui**: Pre-built components using Radix UI and Tailwind CSS
- **class-variance-authority**: Utility for component variants

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

The application is configured for deployment with:

- **Build Process**: Vite builds the frontend static assets, ESBuild bundles the server
- **Production Structure**: 
  - Frontend assets served from `dist/public`
  - Server bundle in `dist/index.js`
- **Database**: Uses PostgreSQL with connection via `DATABASE_URL` environment variable
- **Environment Configuration**: Development and production modes with appropriate middleware

### Key Architectural Decisions

1. **Monorepo Structure**: Chosen for easier code sharing and simplified deployment while maintaining clear separation of concerns

2. **Drizzle ORM**: Selected over Prisma for better TypeScript integration and lighter bundle size, with PostgreSQL dialect configuration

3. **Storage Abstraction**: Implemented an interface-based storage layer allowing for easy switching between in-memory (development) and PostgreSQL (production) storage

4. **Vite Integration**: Used for both frontend builds and development server integration with Express for optimal developer experience

5. **Component Architecture**: Organized into logical sections with reusable common components, promoting maintainability and consistency

6. **Theme System**: Implemented using CSS variables and Tailwind classes for flexible theming with dark/light mode support