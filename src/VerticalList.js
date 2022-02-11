import classNames from "classnames";
import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";
import useStyles from "./VerticalList.style";

function VerticalList({ data, className }) {
  const classes = useStyles();
  return (
    <ul className={classNames([classes.root, className])}>
      {data.map((entry) => (
        <li key={entry.id} className={classes.item}>
          <Link to={`/movies/${entry.id}`} className={classes.link}>
            <MovieCard {...entry} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default VerticalList;
