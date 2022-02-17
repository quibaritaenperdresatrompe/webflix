import classNames from "classnames";
import useStyles from "./MovieCard.style";

function MovieCard({ id, poster_path, title, addToFavorite, favorites }) {
  const imageURL =
    poster_path && `https://image.tmdb.org/t/p/w92${poster_path}`;
  const classes = useStyles({ imageURL });
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{title}</h2>
      <button
        onClick={addToFavorite(id)}
        className={classNames(classes.button, {
          [classes.added]: favorites.includes(id),
        })}
      >
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
    </div>
  );
}

MovieCard.defaultProps = {
  favorites: [],
  addToFavorite: Function.prototype,
};

export default MovieCard;
