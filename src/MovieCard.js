import useStyles from "./MovieCard.style";

function MovieCard(props) {
  const classes = useStyles();
  return <div className={classes.root} />;
}

export default MovieCard;
