# MovieVerse

Discover and track movies you love — browse curated carousels, view details, and manage your watchlist in a clean, responsive UI.

## Features

- Modern React UI with reusable components
- Hero banner and curated carousels for recommendations and trending movies
- Movie cards with quick actions and modal details
- Auth-friendly UI stubs (login modal, user profile)
- Responsive sidebars for navigation and contextual content

## Tech Stack

- React (Create React App)
- React DOM
- Testing Library + Jest (setup included)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm start
   ```
   - App will be available at `http://localhost:3000`.
3. Run tests:
   ```bash
   npm test
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Scripts

- `npm start`: Run development server
- `npm test`: Run tests in watch mode
- `npm run build`: Production build to `build/`

## Project Structure

```text
movieverse/
  public/           # Static assets and HTML template
  src/
    components/     # Reusable UI components
    data/           # Static data for movies/recommendations
    App.js          # Root app component
    index.js        # Entry point
  package.json
  README.md
```

Key components under `src/components/`:
- `Header.jsx`: Top navigation bar
- `HeroBanner.jsx`: Prominent hero section
- `MovieCarousel.jsx`, `RecommendationCarousel.jsx`: Horizontal carousels
- `MovieCard.jsx`: Poster, title, and quick actions
- `MovieModal.jsx`: Detailed info in a modal
- `LeftSidebar.jsx`, `RightSidebar.jsx`: Complementary navigation/content
- `LoginModal.jsx`, `UserProfile.jsx`: Auth-related UI stubs

## Environment

This project does not require secrets by default. If you introduce APIs later, prefer `.env.local` files (already ignored by git).

## Contributing

- Fork the repo and create a feature branch
- Use clear commit messages (conventional commits recommended)
- Open a PR with a descriptive title and summary

## Roadmap

- Integrate real movie API (TMDB or similar)
- Add search, filters, and genres
- Persist user watchlist and ratings
- Improve accessibility and keyboard navigation

## License

This project is open source under the MIT License.
