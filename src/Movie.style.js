import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    padding: 16,
  },
  main: {
    display: "flex",
    alignItems: "flex-end",
  },
  poster: {
    height: 138,
    width: 92,
    marginRight: 16,
  },
  genres: {
    display: "flex",
  },
  genre: {
    marginLeft: 4,
    marginRight: 4,
  },
  button: {
    border: "none",
    padding: "4px 8px",
    backgroundColor: "black",
    color: "white",
    fontSize: 10,
    fontWeight: 700,
  },
});

export default useStyles;
