import axios from "axios";

const key = import.meta.env.VITE_APP_API_KEY;

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);

const getAllGames = async () => {
  try {
    const response = await axiosCreate.get(`games?key=${key}&page_size=40`);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

export default { getAllGames, getGenreList };
