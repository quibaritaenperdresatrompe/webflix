import { call, all, put, takeLatest } from "redux-saga/effects";
import { moviesSlice } from "./slices";

async function httpClient(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

// worker Saga
export function* fetchMovies() {
  const movies = yield call(
    httpClient,
    `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
  );
  yield put(moviesSlice.actions.add({ movies }));
}

// watcher Saga
export function* watchMovies() {
  yield takeLatest("FETCH_MOVIES", fetchMovies);
}

// root Saga
export function* rootSaga() {
  yield all([watchMovies()]);
}
