# Product Requirements Document (PRD) — Recipe Explorer

## 1. Overview & Objective
Recipe Explorer is a single-page React web application built with **Vite** following the **Master-Detail** architectural pattern. The goal of the application is to allow home cooks and users to discover cooking recipes, filter meals in real time, and view detailed ingredients and cooking steps fetched from a public keyless API (**TheMealDB**).

## 2. Target Audience
Everyday users and cooking enthusiasts seeking recipe inspiration with a fast, intuitive, and responsive browsing experience on both desktop and mobile screens.

## 3. Acceptance Criteria (User Stories)
* **When I** load the application, **I see** a loading indicator while recipes are fetched, followed by a list of meal cards showing their thumbnails and titles.
* **When I** click on a recipe card in the list, **I see** the details panel display the selected dish's full picture, category, area, ingredient measurements, and complete cooking instructions.
* **When I** type into the search bar, **I see** the recipe list filter dynamically to show only dishes matching the search term, alongside an updated result counter.
* **When I** search for a query with no matches, **I see** a clear "No recipes found" message.
* **When I** experience an API or network error, **I see** an error status message on the screen.
* **When I** click the close button in the details panel, **I see** the detail view reset back to its placeholder state.

## 4. UI Architecture & Components
* **`App.jsx`**: Centralized state management for fetched recipes, selected item, search term, and network status.
* **`Header.jsx`**: Displays branding, search input, and recipe counter.
* **`RecipeList.jsx`**: Master container that renders the list of recipe cards and handles empty search feedback.
* **`RecipeCard.jsx`**: Renders an individual dish item with its thumbnail and handles user selection clicks.
* **`RecipeDetail.jsx`**: Detail panel rendering ingredients, measures, instructions, and close action.

## 5. Technical Constraints
* **Framework**: React 18 with Vite build tool.
* **Data Source**: TheMealDB public keyless API (`https://www.themealdb.com/api/json/v1/1/search.php?s=`).
* **Responsive Design**: Custom CSS (Flexbox & Media Queries) supporting both desktop and mobile layouts (375px+).