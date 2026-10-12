# Prompts Log

## Task 1 — show the list
Prompt: Create project structure with Vite, define PRD.md and tasks.md, and show initial recipes list from a local JSON file.
Agent did: Created PRD.md, tasks.md, src/mockRecipes.json, and configured src/App.jsx to render recipes locally using map.
I checked: Ran npm run dev, verified in the browser that recipes are rendered properly, and checked that git ignores node_modules.

## Task 2 — recipe selection and detail panel
Prompt: Break down into 4 modular components and display recipe details in a side panel when a card is clicked.
Agent did: Created src/components/Header.jsx, src/components/RecipeCard.jsx, src/components/RecipeList.jsx, and src/components/RecipeDetail.jsx. Managed selectedRecipe state in App.jsx.
I checked: Clicked on different cards to verify the detail panel opens with full data, and verified the close button resets the selection.

## Task 3 — live API integration
Prompt: Replace the local JSON data with live fetching from TheMealDB API, adding loading and error states.
Agent did: Updated src/App.jsx with useEffect and native fetch to call https://www.themealdb.com/api/json/v1/1/search.php?s=, handling loading, error, and success states.
I checked: Reloaded the application in the browser and verified recipes are dynamically fetched from the API with proper loading indicator.

## Task 4 — real-time search and ingredients display
Prompt: Implement real-time recipe search and enhance recipe details with parsed ingredients and measurements.
Agent did: Added search state and input filtering in Header.jsx and App.jsx, parsed ingredients array in RecipeDetail.jsx, and added a results counter.
I checked: Tested search input with different queries, checked empty state message when no results match, and reviewed ingredients badges layout.

## Task 5 — responsive styling and layout polish
Prompt: Enhance CSS styling for desktop and mobile, and improve card hover states and details panel scrollbar.
Agent did: Updated src/App.css with flexbox layout, responsive media queries (375px+), custom scrollbars, and card highlights.
I checked: Resized the browser window and inspected mobile layout to confirm cards and detail panel stack properly.

## Task 6 — bonus: persistent favorites with localStorage
Prompt: Add a bonus feature to mark recipes as favorites and persist them across sessions using localStorage.
Agent did: Added favorites state with localStorage persistence in App.jsx, favorite toggle button in RecipeDetail.jsx, and a favorites filter button in Header.jsx.
I checked: Marked recipes as favorites, refreshed the browser to verify they remained saved in localStorage, and toggled the filter button.