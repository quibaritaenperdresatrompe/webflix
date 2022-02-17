import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";
import useStyles from "./HorizontalList.style";

function HorizontalList({ data }) {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
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

export default HorizontalList;
