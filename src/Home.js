import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";

import Input from "./Input";
import VerticalList from "./VerticalList";
import useStyles from "./Home.style";

function buildUrl(value) {
  return value.length > 0
    ? `${process.env.REACT_APP_API_URL}/search/movie?query=${value}&api_key=${process.env.REACT_APP_API_KEY}`
    : `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;
}

function Home() {
  const classes = useStyles();

  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") || "");
  const onChange = useCallback(
    (event) => {
      setValue(event.target.value);
      setSearchParams(event.target.value ? { q: event.target.value } : {});
    },
    [setSearchParams]
  );

  const { data, isLoading, isFetching, error } = useQuery(
    ["movies", value],
    () => fetch(buildUrl(value)).then((response) => response.json())
  );

  return (
    <div className={classes.root}>
      <Input value={value} onChange={onChange} />
      {error && <div className={classes.error}>{error}</div>}
      {(isLoading || isFetching) && <div>Loading movies...</div>}
      {!isLoading && !error && (
        <VerticalList className={classes.list} data={data?.results} />
      )}
    </div>
  );
}

export default Home;
