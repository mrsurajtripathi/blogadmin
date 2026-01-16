import axios from "axios";
const api = axios.create({
  baseURL: "https://auth.surajtripathi.com",
});

export default api;