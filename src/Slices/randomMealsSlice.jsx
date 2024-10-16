import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customUrl from "../Utils/axios";
import axios from "axios";

const initialState = {
  isLoading: false,
  randomMealData: [],
  randomCockTailData: [],

  hover: false,
};

export const getRandomMeal = createAsyncThunk(
  "random meal",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );

      return resp;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getRandomCockTail = createAsyncThunk(
  "random CockTail",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );

      return resp;
    } catch (error) {
      console.log(error);
    }
  }
);

const RandomMealSlice = createSlice({
  name: "Random",
  initialState,
  reducers: {
    showRandom: (state, { payload }) => {
      state.hover = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRandomMeal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRandomMeal.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.randomMealData = payload.data.meals[0];
      })
      .addCase(getRandomMeal.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getRandomCockTail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRandomCockTail.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.randomCockTailData = payload.data.drinks[0];
      })
      .addCase(getRandomCockTail.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { showRandom } = RandomMealSlice.actions;
export default RandomMealSlice.reducer;
