import WatchedMovie from "./WatchedMovie";

function WatchedMoviesList({ watched ,onDelete}) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default WatchedMoviesList;
