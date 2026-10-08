# Recipe Explorer

A modern front-end React web application built with Vite following the Master-Detail architectural pattern. The application enables users to browse a collection of culinary recipes, search and filter dishes in real time, view complete ingredients and instructions, and persist favorite meals across browser sessions.

---

## API Used

The project uses the free, public, keyless TheMealDB API:
- Endpoint: `https://www.themealdb.com/api/json/v1/1/search.php?s=`
- Description: Returns detailed recipes with titles, thumbnails, categories, regional origins, ingredient lists, and cooking instructions.

---

## Key Features

- Component Architecture: Built from 4 distinct modular components (Header, RecipeList, RecipeCard, and RecipeDetail).
- Live Public API: Fetches recipe data via native fetch within a useEffect hook with Loading and Error state handling.
- Data Flow & State Management: Centralized state in App.jsx with clean unidirectional data flow via props.
- Master-Detail View:
  - Master: Scrollable recipe list with custom thumbnail layout.
  - Detail: Dedicated side panel showing category, origin, ingredient badges with exact measurements, and instructions.
- Client-Side Search: Instant in-memory filtering by recipe name with live counter feedback.
- Bonus - Favorites & Persistence: Users can bookmark favorite dishes saved directly to localStorage, with dedicated filter toggle in the header.
- Responsive Design: Custom CSS (Flexbox & Media Queries) adapting cleanly for desktop and mobile viewports.

---

## How to Run Locally

Follow these steps to run the application on your machine:

1. Clone the repository:
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd recipe-explorer