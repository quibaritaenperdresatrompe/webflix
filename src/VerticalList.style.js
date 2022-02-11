import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    margin: 0,
    padding: 0,
    justifyContent: "center",
  },
  item: {
    padding: 8,
  },
  link: {
    textDecoration: "none",
  },
});

export default useStyles;
