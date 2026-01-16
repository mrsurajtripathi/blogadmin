
import api from "../../services/apis";

export const fetchBlogsAPI = () => api.get("/blogs");
export const createBlogAPI = (data) => api.post("/blogs", data);