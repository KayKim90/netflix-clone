import axios from "axios";

// base url to make req to the movie db
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default axiosInstance;
