import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    overflowX: "scroll",
  },
  item: {
    padding: 8,
  },
  link: {
    textDecoration: "none",
  },
});

export default useStyles;
