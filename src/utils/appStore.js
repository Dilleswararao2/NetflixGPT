import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import gptMovieReducer from "./gptMovieSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptMovie: gptMovieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
