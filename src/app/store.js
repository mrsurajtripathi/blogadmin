import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blogs/blogSlice";
import categorySlice from "../features/categories/categorySlice";
import tagSlice from "../features/tags/tagSlice";

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    categories: categorySlice,
    tags: tagSlice
  },
});
