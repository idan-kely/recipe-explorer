# Product Requirements Document (PRD) — Recipe Explorer

## 1. Overview & Objective
Recipe Explorer is a single-page React web application built with **Vite** following the **Master-Detail** architectural pattern. The goal of the application is to allow home cooks and users to discover cooking recipes, filter meals in real time, save favorites persistently, and view detailed ingredients and cooking steps fetched from a public keyless API (**TheMealDB**).

## 2. Target Audience
Everyday users and cooking enthusiasts seeking recipe inspiration with a fast, intuitive, and responsive browsing experience on both desktop and mobile screens.

## 3. Acceptance Criteria (User Stories)
* **When I** load the application, **I see** a loading indicator while recipes are fetched, followed by a list of meal cards showing their thumbnails and titles.
* **When I** click on a recipe card in the list, **I see** the details panel display the selected dish's full picture, category, area, ingredient measurements, and complete cooking instructions.
* **When I** type into the search bar, **I see** the recipe list filter dynamically to show only dishes matching the search term, or a "No recipes found" message if there are no matches.
* **When I** click the "Add to Favorites" button in the details panel, **I see** the recipe saved and persisted in `localStorage`.
* **When I** click the close button in the details panel, **I see** the detail view reset back to its placeholder state.

## 4. UI Architecture & Components
* **`App.jsx`**: Centralized state management for fetched recipes, selected item, search term, favorite meal IDs (`localStorage`), and network status.
* **`Header.jsx`**: Displays branding, search input, recipe counter, and favorites toggle filter.
* **`RecipeList.jsx`**: Master container that renders the list of recipe cards and handles empty search feedback.
* **`RecipeCard.jsx`**: Renders an individual dish item with its thumbnail and handles user selection clicks.
* **`RecipeDetail.jsx`**: Detail panel rendering ingredients, measures, instructions, favorite action button, and close action.

## 5. Technical Constraints
* **Framework**: React 18 with Vite build tool.
* **Data Source**: TheMealDB public keyless API (`https://www.themealdb.com/api/json/v1/1/search.php?s=`).
* **Persistence**: Browser `localStorage` for offline saving of favorite recipes.
* **Responsive Design**: Custom CSS (Flexbox & Media Queries) supporting both desktop and mobile layouts (375px+).