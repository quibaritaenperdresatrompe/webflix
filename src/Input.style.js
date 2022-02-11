import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    borderColor: "black",
    borderWidth: 2,
    height: 32,
    fontSize: 20,
    fontWeight: 700,
    borderRadius: 0,
    "&:focus": {
      outline: "none",
    },
  },
});

export default useStyles;
