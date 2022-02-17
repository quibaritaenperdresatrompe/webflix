import classNames from "classnames";
import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";
import useStyles from "./VerticalList.style";

function VerticalList({ data, className, addToFavorite, favorites }) {
  const classes = useStyles();
  return (
    <ul className={classNames([classes.root, className])}>
      {data.map((entry) => (
        <li key={entry.id} className={classes.item}>
          <Link to={`/movies/${entry.id}`} className={classes.link}>
            <MovieCard
              {...entry}
              addToFavorite={addToFavorite}
              favorites={favorites}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

VerticalList.defaultProps = {
  data: [],
};

export default VerticalList;
