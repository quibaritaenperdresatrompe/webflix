import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    add: (state, action) =>
      state.includes(action.payload.id) ? state : [...state, action.payload.id],
    remove: (state, action) => state.filter((id) => id !== action.payload.id),
    toggle: (state, action) =>
      state.includes(action.payload.id)
        ? state.filter((id) => id !== action.payload.id)
        : [...state, action.payload.id],
  },
});
