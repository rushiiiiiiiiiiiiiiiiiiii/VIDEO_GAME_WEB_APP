# Video Games SPA – React Assignment

## Overview

This project is a 2-page responsive Single Page Application (SPA) built using React as part of a technical assignment.

The application fetches a list of video games from a public API, displays them according to the provided designs, and allows users to filter and sort the results.
A secondary Contact page is included, following the assignment brief.

The focus of this implementation is correctness, clean structure, responsiveness, and practical React usage, while keeping the solution simple and aligned with real-world frontend development practices.


## Features

### Video Games Page

* Fetches 100 video games asynchronously on initial page load
* Displays a loading indicator while data is being fetched
* Renders game information including:

  * Game title
  * Release date (formatted)
  * Summary
  * Rating score
* Filtering and sorting options:

  * Search by name (case-insensitive, contains)
  * Filter by minimum score
  * Sort by:

    * Release date
    * Score
    * Name
* Clear button resets all filters and displays all results without re-fetching data
* Graceful empty state when no matching results are found


### Contact Page

* UI-only contact form
* Layout adapted from the provided design
* Fully responsive across viewports
* No form submission logic (as specified in the assignment)


## Tech Stack

* React (Functional components & Hooks)
* Vite for project setup and bundling
* React Router for client-side routing
* CSS (Flexbox & Grid) for layout and responsiveness
* Native Fetch API for API communication

No external UI libraries or state management libraries were used, keeping the solution lightweight and within the scope of the assignment.


## Project Structure

```
src/
├── api/            # API interaction
├── components/     # Reusable UI components
├── hooks/          # Custom hooks (business logic)
├── pages/          # Route-level components
├── styles/         # Global styles and CSS variables
├── App.jsx
└── main.jsx
```

### Key Design Decisions

* API-related logic is isolated from UI components
* Filtering and sorting logic is handled inside a custom React hook
* Components are kept focused on presentation and reusability
* Global colors and typography are managed using CSS variables for consistency


## Styling & Responsiveness

* Fonts

  * Montserrat for headings, labels, and buttons
  * Mulish for body text
* Color palette and background gradients follow the provided design specifications
* Responsive layouts implemented for:

  * Desktop
  * Tablet
  * Mobile

The UI adapts smoothly across different screen sizes while maintaining readability and usability.


## API Used

GET https://admin.edulatte.in/api/games

* Data is fetched once on initial load
* Filtering and sorting are handled client-side as required
* Pagination and backend filtering were intentionally not implemented, as they were outside the scope of the assignment


## How to Run the Project

```bash
npm install
npm run dev
```

The application will be available at:

http://localhost:5173


## Notes

* TypeScript was optional and therefore not used
* Pagination was not implemented, as the assignment required local filtering
* The solution prioritizes clarity, maintainability, and correctness over unnecessary complexity

## Deployed Link On Vercel

https://video-game-web-app.vercel.app

## Future Improvements

Given more time or in a production environment, the following enhancements could be considered:

* Server-side filtering and pagination using API query parameters
* Form validation and submission handling on the Contact page
* Performance optimizations for larger datasets


## Final Thoughts

This project was developed to closely follow the assignment requirements while maintaining a clean, readable, and practical approach.
The goal was to demonstrate a solid understanding of React fundamentals, asynchronous data handling, component-based architecture, and responsive UI development.
