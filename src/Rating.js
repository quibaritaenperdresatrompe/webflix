import classNames from "classnames";
import useStyles from "./Rating.style";

const MAX_STARS = 5;

function Rating({ value }) {
  const classes = useStyles();
  const stars = Math.trunc(value);
  return (
    <div>
      {Array.from({ length: stars }, (v, k) => (
        <span role="img" aria-label="star" className={classes.star} key={k}>
          ⭐
        </span>
      ))}
      {Array.from({ length: MAX_STARS - stars }, (v, k) => (
        <span
          role="img"
          aria-label="star"
          className={classNames([classes.star, classes.empty])}
          key={k}
        >
          ⭐
        </span>
      ))}
      <span className={classes.label}>{value.toFixed(1)} / 5</span>
    </div>
  );
}

Rating.defaultProps = {
  value: 0,
};

export default Rating;
