# Blog In (Frontend)

React SPA for browsing and commenting on blogs. Built with Vite, React Router 7, and date-fns; consumes the hosted Blog In backend at `https://blog-in-backend.vercel.app`.

## Features
- Browse paginated posts with quick read-time estimates and author metadata.
- Keyword search across posts from the landing page.
- View full post content, metadata, and existing comments.
- JWT-based auth with localStorage persistence; login/signup flows.
- Add comments to a post when authenticated.

## Tech Stack
- Vite 7 + React 19
- React Router 7
- date-fns for date formatting
- ESLint (flat config)

## Project Structure (key files)
- src/main.jsx – bootstraps the app.
- src/AppProvider.jsx – wires RouterProvider and auth context state.
- src/App.jsx – shared layout (header, footer, outlet).
- src/routes.jsx – route map for home, auth, and post pages.
- src/components/
	- Home.jsx – fetch/search/paginate posts.
	- Post.jsx / Blog.jsx – list and card rendering.
	- PostPage.jsx – post detail, comments, add comment.
	- LoginForm.jsx / SignupForm.jsx – auth flows.
	- Header.jsx / Footer.jsx – chrome and navigation.
- src/styles/ – component-scoped styles.

## Data & API Notes
- Backend base URL: `https://blog-in-backend.vercel.app` (hardcoded in Home.jsx, LoginForm.jsx, SignupForm.jsx, PostPage.jsx).
- Auth: JWT saved to `localStorage` via AppContext; logout clears storage.
- Commenting: requires a stored token; POSTs include `Authorization: Bearer <token>`.

## Running Locally
1) Install Node.js 18+.
2) Install dependencies: `npm install`.
3) Start dev server: `npm run dev` (Vite shows the local URL).
4) Lint: `npm run lint`.
5) Production build: `npm run build`; preview build: `npm run preview`.

## Customizing API Endpoints
If you need a different backend, update the fetch URLs in:
- src/components/Home.jsx
- src/components/LoginForm.jsx
- src/components/SignupForm.jsx
- src/components/PostPage.jsx

## Deployment
- Build outputs to `dist/` via `npm run build`.
- Serve the static output on any static host (Netlify, Vercel, S3 + CloudFront, etc.).
