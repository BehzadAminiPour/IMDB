import { useState, useEffect } from "react";
let key = "169d2669";
export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      callback?.();
      const controller = new AbortController();
      async function fetchData() {
        try {
          setIsLoading(true);
          setError("");
          const response = await fetch(
            `http://www.omdbapi.com/?s=${query}&apikey=${key}`,
            { signal: controller.signal }
          );
          if (!response.ok) throw new Error("Can not fetch data");
          const data = await response.json();
          // console.log(data.Response);
          if (data.Response === "False") throw new Error("Movie not found!!!");
          setMovies(data.Search);
          setError("");
        } catch (err) {
          // console.log(err.message);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      //   handleClose();
      fetchData();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
