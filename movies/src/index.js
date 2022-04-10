import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMovies";
<<<<<<< HEAD
import TrendingMoviesPage from "./pages/trendingMovies";
import StreamingMoviesPage from "./pages/streamingMovies";
import TopMoviesPage from "./pages/topMovies";
=======
>>>>>>> f276805fd5d3114fed72934db034dfbfb80c8e68
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <SiteHeader />
      <MoviesContextProvider>
        <Routes>
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/movies/upcoming" element={< UpcomingMoviesPage />} />
<<<<<<< HEAD
          <Route path="/movies/trending" element={< TrendingMoviesPage />} />
          <Route path="/movies/streaming" element={< StreamingMoviesPage />} />
          <Route path="/movies/top" element={< TopMoviesPage />} />
=======
>>>>>>> f276805fd5d3114fed72934db034dfbfb80c8e68
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));