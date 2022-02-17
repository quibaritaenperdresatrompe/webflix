import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 16,
  },
  list: {
    marginTop: 32,
  },
  error: { padding: 8, color: "red" },
});

export default useStyles;
