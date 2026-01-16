import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBlogsAPI, createBlogAPI } from "./blogAPI";

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async () => {
    const res = await fetchBlogsAPI();
    return res.data;
  }
);

export const createBlog = createAsyncThunk(
  "blogs/createBlog",
  async (payload) => {
    const res = await createBlogAPI(payload);
    return res.data;
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    list: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      });
  },
});

export default blogSlice.reducer;
