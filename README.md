# FUTMINNA Smart Navigation System

A React-based campus navigation system for FUTMINNA using Leaflet maps to provide an intuitive mapping experience.

## Features

- Interactive map of FUTMINNA campuses (Gidan Kwano and Bosso)
- Location search with autocomplete
- Direction finding between campus locations
- Building and facility information
- Responsive design for mobile and desktop

## Technology Stack

- React.js frontend
- TypeScript for type safety
- Leaflet for mapping (open-source, no API key required)
- Tailwind CSS for styling
- Wouter for client-side routing

## Running the Application (Client-Only Mode)

This application has been designed to run without a backend server component. You can run it using either of these methods:

### Method 1: Direct Vite Server

```bash
# Start the client-only application
npx tsx start-client.ts
```

### Method 2: Building for Production 

```bash
# Build the client-only application
npx tsx build-client.ts

# Navigate to the build directory
cd dist

# Start the simple static file server
npm start
```

## Project Structure

- `client/` - Contains all frontend code
  - `src/` - React components and application logic
  - `public/` - Static assets
- `attached_assets/` - Additional project assets and images

## Customization

- Campus locations are defined in `client/src/data/locations.ts`
- Map styling and interaction can be modified in `client/src/components/Map.tsx`
- UI components use Tailwind CSS for styling

## Deployment

This application is designed for easy deployment to any static file hosting service:

1. Build the application: `npx tsx build-client.ts`
2. Deploy the contents of the `dist/` directory

## License

MIT