import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/apis";

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    const res = await api.get("/categories");
    return res.data;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: { list: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default categorySlice.reducer;
