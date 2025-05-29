# React Movie App

This is a React app built with Vite that allows users to browse and search movies using live data from the TMDB API. The app displays popular, trending, and top-rated movies with posters, titles, and ratings.

Users can search movies by title with instant results updating dynamically. The app tracks the top 5 recent search terms and saves these **Top Searches** in Appwrite’s database to show popular search queries.

Trending movies shown on the homepage are dynamically generated based on the users’ search activities.

The interface is responsive and designed for smooth browsing on both desktop and mobile devices.

## Tools and Technologies Used

- React with Vite for fast and efficient development and build
- TMDB API for live movie data fetching
- Appwrite for backend as a service, storing top search queries
- CSS for styling and responsive design
- Hostinger for deployment

## Features

- Browse popular, trending, and top-rated movies with data from TMDB API
- Search movies by title with instant results
- Track and display Top 5 search terms saved in Appwrite database
- Trending movies dynamically generated from user search behavior
- Responsive UI for desktop and mobile
- No user login or authentication implemented

## How to Run the Project Locally

1. Clone the repository:
```bash
git clone https://github.com/devzaira/movie-app.git
```
2. Copy `.env.example` to `.env.local` and fill in your TMDB API key and Appwrite project info:
```bash
cp .env.example .env.local
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
Open http://localhost:5173 in your browser to view the app.

## Build and Deployment
To build for production, run:
```bash
npm run build
```
Then upload the contents of the dist folder to your hosting provider (such as Hostinger).

## What I Learned and Demonstrated

- Integrating React with third-party APIs (TMDB)
- Using backend as a service (Appwrite) to store persistent search data
- Managing environment variables securely for API keys and endpoints
- Building a fast, responsive web application with Vite and React
- Deploying a static build to shared hosting
