import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/apis";

export const fetchTags = createAsyncThunk(
    "tags/fetch",
    async () => {
      const res = await api.get("/tags");
      return res.data;
    }
  );

const tagSlice = createSlice({
    name: "tags",
    initialState: { list: [] },
    extraReducers: (builder) => {
      builder.addCase(fetchTags.fulfilled, (state, action) => {
        state.list = action.payload;
      });
    },
  });

  export default tagSlice.reducer;