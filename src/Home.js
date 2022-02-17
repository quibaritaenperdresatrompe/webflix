import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Input from "./Input";
import VerticalList from "./VerticalList";
import data from "./data.json";
import useStyles from "./Home.style";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const classes = useStyles();
  const [value, setValue] = useState(searchParams.get("q"));
  const onChange = (event) => {
    setValue(event.target.value);
    setSearchParams(event.target.value ? { q: event.target.value } : {});
  };
  const movies = data.movies.filter((movie) =>
    movie.title.match(new RegExp(value, "i"))
  );
  return (
    <div className={classes.root}>
      <Input value={value} onChange={onChange} />
      <VerticalList className={classes.list} data={movies} />
    </div>
  );
}

export default Home;
