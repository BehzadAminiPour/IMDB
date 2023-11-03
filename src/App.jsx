import MainBox from "./components/MainBox";
import Navbar from "./components/Navbar";
import Box from "./components/Box";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import NumResult from "./components/NumResult";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList";
import Loader from "./components/Loader";
import Error from "./components/Error";
import MovieDetails from "./components/MovieDetails";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query, handleClose);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleWatchMovie(newData) {
    setWatched((prevWatched) => [...prevWatched, newData]);
    setSelectedId(null);
  }
  function handleSelect(id) {
    setSelectedId((prevId) => (prevId !== id ? id : null));
  }
  function handleClose() {
    setSelectedId(null);
  }
  function handleDeleteWatched(id) {
    //  console.log(id)
    setWatched((prevWatched) =>
      prevWatched.filter((movie) => movie.imdbID !== id)
    );
  }

  return (
    <>
      <Navbar>
        <SearchBar query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </Navbar>
      <MainBox>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectId={handleSelect} />
          )}
          {error && <Error message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              onAddWatched={handleWatchMovie}
              selectedId={selectedId}
              onBack={handleClose}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDelete={handleDeleteWatched}
              />
            </>
          )}
        </Box>

        {/* <Box element={<MovieList movies={movies} />} />

        <Box
          element={
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          }
        /> */}
      </MainBox>
    </>
  );
}
