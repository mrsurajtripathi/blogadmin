import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blogs/blogSlice";
// import categoryReducer from "../features/categories/categorySlice";
// import tagReducer from "../features/tags/tagSlice";

export const store = configureStore({
  reducer: {
    blogs:blogReducer
  },
});
