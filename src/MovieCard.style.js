import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    height: 138,
    width: 92,
    background: ({ imageURL }) => (imageURL ? `url(${imageURL})` : "grey"),
    overflow: "hidden",
  },
  title: {
    padding: 8,
    color: "white",
    fontSize: 12,
    textShadow: "1px 1px 6px black",
    wordBreak: "break-word",
  },
});

export default useStyles;
