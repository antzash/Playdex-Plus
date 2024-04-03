import axios from "axios";

const key = import.meta.env.VITE_APP_API_KEY;

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

const getAllGames = async () => {
  const response = await axiosCreate.get(`games?key=${key}`);
  const games = response.data.results;
  console.log(games);
  return games;
};

export default { getAllGames };
