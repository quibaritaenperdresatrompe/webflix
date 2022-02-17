import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import data from "./data.json";
import Genre from "./Genre";
import HorizontalList from "./HorizontalList";
import useStyles from "./Movie.style";
import Rating from "./Rating";

const OVERVIEW_SIZE = 120;

function Movie() {
  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  const toggle = () => setExpand(!expand);
  const { id } = useParams();
  const movie = data.movies.find((movie) => movie.id.toString() === id);
  if (!movie) return <Navigate to="/" replace={true} />;
  const suggestions = data.movies.filter(
    (suggestion) =>
      suggestion.id !== movie.id &&
      suggestion.genre_ids.some((genre) => movie.genre_ids.includes(genre))
  );
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <img
          src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
          alt={movie.title}
          className={classes.poster}
        />
        <div>
          <h1 className={classes.title}>{movie.title}</h1>
          <p>
            sorti le{" "}
            {new Intl.DateTimeFormat("fr", { dateStyle: "long" }).format(
              new Date(movie.release_date)
            )}
          </p>
          <div className={classes.genres}>
            {movie.genre_ids.map((genre) => (
              <div key={genre} className={classes.genre}>
                <Genre id={genre} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p>
        {movie.overview.substring(
          0,
          expand ? movie.overview.length - 1 : OVERVIEW_SIZE
        )}
        {!expand && movie.overview.length > OVERVIEW_SIZE ? "..." : ""}
        {!expand && (
          <>
            <br />
            <button onClick={toggle} className={classes.button}>
              Lire plus
            </button>
          </>
        )}
      </p>
      <h2>Note du public</h2>
      <Rating value={movie.vote_average / 2} /> <h2>Contenu similaire</h2>
      <HorizontalList data={suggestions} />
    </div>
  );
}

export default Movie;
