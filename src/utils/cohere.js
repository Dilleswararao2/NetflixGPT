import axios from "axios";
import { COHERE_API_KEY } from "./constants";

export const getMovieSuggestions = async (inputText) => {
  const prompt = `Act as a Movie Recommendation system and suggest some movies for the query : "${inputText}". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;
  try {
    const res = await axios.post("http://localhost:8000/cohere", {
      model: "command",
      prompt,
      max_tokens: 100,
      temperature: 0.7,
    });

    const generations = res?.data?.generations;
    if (!generations || generations.length === 0) {
      throw new Error("No generations returned by Cohere");
    }

    return generations[0].text.trim();
  } catch (error) {
    console.error("Cohere API error:", error?.response?.data || error.message);
    throw error;
  }
};
