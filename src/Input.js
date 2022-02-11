import useStyles from "./Input.style.js";

function Input({ value, onChange }) {
  const classes = useStyles();
  return (
    <input
      className={classes.root}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
