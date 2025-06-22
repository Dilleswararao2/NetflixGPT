import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import {
  setQuery,
  setRecommendations,
  setLoading,
  setError,
} from "../utils/gptMovieSlice";
import { getMovieSuggestions } from "../utils/cohere";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const { query, recommendations, loading, error } = useSelector(
    (store) => store.gptMovie
  );

  const handleSearch = async () => {
    const userQuery = searchRef.current.value;
    dispatch(setQuery(userQuery));
    dispatch(setLoading());

    try {
      const result = await getMovieSuggestions(userQuery);
      dispatch(setRecommendations(result));
    } catch (err) {
      console.error("Cohere API error:", err.response?.data || err.message);
      dispatch(setError("Failed to fetch suggestions"));
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchRef}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearch}
        >
          {lang[langKey].search}
        </button>
        {loading && <p className="mt-4">🔄 Loading recommendations...</p>}
        {recommendations && (
          <div className="mt-4">
            <strong>🎬 Recommendations:</strong>
            <p>{recommendations}</p>
          </div>
        )}
        {error && <p className="text-red-400">{error}</p>}
      </form>
    </div>
  );
};
export default GptSearchBar;
