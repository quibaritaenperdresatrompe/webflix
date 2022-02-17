import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Input from "./Input";
import VerticalList from "./VerticalList";
import useStyles from "./Home.style";

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

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function fetchMovies(query) {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        query.length > 0
          ? `${process.env.REACT_APP_API_URL}/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`
          : `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
      );
      if (!response.ok) {
        setError("Fetching movies failed");
      }
      const data = await response.json();
      setMovies(data.results);
    } catch {
      setError("Fetching movies failed");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchMovies(value);
  }, [value]);

  return (
    <div className={classes.root}>
      <Input value={value} onChange={onChange} />
      {error && <div className={classes.error}>{error}</div>}
      {loading && <div>Loading movies...</div>}
      {!loading && !error && (
        <VerticalList className={classes.list} data={movies} />
      )}
    </div>
  );
}

export default Home;
