# dkassignment1# Assignment 1 - ReactJS app.

Name: Darren Kidby

## Overview.

An extended version of the movies app.

### Features.
You can look at what movies are popular, that are playing now and that are top rated.

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

Popular
`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

Now Playing
`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

Top Rated
`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`


## Routing.

Popular
<Route path="/movies/trending" element={< TrendingMoviesPage />} />

Now Playing 
<Route path="/movies/streaming" element={< StreamingMoviesPage />} />

Top Rated
<Route path="/movies/top" element={< TopMoviesPage />} />

## Independent learning (If relevant).

I changed the colour of the site header to primary instead of secondary to suit the colour of the app.