import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    height: 138 - 8,
    width: 92 - 8,
    background: ({ imageURL }) => (imageURL ? `url(${imageURL})` : "grey"),
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 4,
  },
  title: {
    padding: 8,
    color: "white",
    fontSize: 12,
    textShadow: "1px 1px 6px black",
    wordBreak: "break-word",
    flexGrow: 1,
  },
  button: {
    border: "none",
    background: "transparent",
    opacity: 0.5,
    fontSize: 16,
  },
  added: {
    opacity: 1,
  },
});

export default useStyles;
