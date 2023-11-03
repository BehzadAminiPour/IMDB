import { useEffect, useRef } from "react";
import classes from "./SearchBar.module.css";
import { useKey } from "../hooks/useKey";
function SearchBar({ query, setQuery }) {
  const inputRef = useRef(null);
  useKey("enter", function () {
    if (document.activeElement === inputRef.current) return;
    inputRef.current.focus();
    setQuery("");
  });
  // useEffect(
  //   function () {
  //     function callback(e) {
  //       if (document.activeElement === inputRef.current) return;
  //       if (e.code === "Enter") {
  //         inputRef.current.focus();
  //         setQuery("");
  //       }
  //     }
  //     document.addEventListener("keydown", callback);
  //     return () => addEventListener("keydown", callback);
  //   },
  //   [setQuery]
  // );
  // useEffect(function () {
  //   const el = document.querySelector("._search_6kmol_1");
  //   console.log(el);
  //   el.focus()
  // }, [query]);
  return (
    <input
      className={classes.search}
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputRef}
    />
  );
}

export default SearchBar;
