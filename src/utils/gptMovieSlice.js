import { createSlice } from "@reduxjs/toolkit";

const gptMovieSlice = createSlice({
  name: "gptMovie",
  initialState: {
    query: "",
    recommendations: null,
    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setRecommendations: (state, action) => {
      state.recommendations = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setQuery, setRecommendations, setLoading, setError } =
  gptMovieSlice.actions;

export default gptMovieSlice.reducer;
