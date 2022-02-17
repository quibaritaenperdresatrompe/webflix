import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  star: {
    padding: 8,
    fontSize: 24,
  },
  empty: {
    opacity: 0.3,
  },
  label: {
    marginLeft: 8,
    fontWeight: 700,
  },
});

export default useStyles;
