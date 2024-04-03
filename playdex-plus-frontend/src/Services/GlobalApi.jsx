import axios from "axios";

const key = import.meta.env.VITE_APP_API_KEY;

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

export default {};
