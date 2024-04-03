import axios from "axios";

const key = import.meta.env.VITE_APP_API_KEY;

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

const getAllGames = async () => {
  let allGames = [];

  // Loop through 12 pages
  for (let page = 1; page <= 12; page++) {
    const response = await axiosCreate.get(
      `games?key=${key}&page_size=40&page=${page}`
    );
    const games = response.data.results;
    console.log(`Page ${page}:`, games);
    allGames = [...allGames, ...games];
  }

  return allGames;
};

export default { getAllGames };
