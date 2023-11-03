import Movie from "./Movie";
import classes from './MovieList.module.css'
function MovieList({movies,onSelectId}) {
 
  return (
    <ul className={`${classes.list} ${classes['list-movies']}`}>
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelectId={onSelectId}/>
      ))}
    </ul>
  );
}

export default MovieList;
