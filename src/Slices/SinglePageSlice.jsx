import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customUrl from "../Utils/axios";
import axios from "axios";

const initialState = {
  isLoading: false,
  SingleMealData: [],
  SingleDrinkData: [],
};

export const getMealSinglePage = createAsyncThunk(
  "meal Single page",
  async (id, thunkAPI) => {
    
      try {
        const resp = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        return resp;
      } catch (error) {
        console.log(error);
      }
    } 
       
    
);
export const getDrinkSinglePage = createAsyncThunk(
  "Drink Single page",
  async (id, thunkAPI) => {
    
        try {
          const resp = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          return resp;
        } catch (error) {
          console.log(error);
        }
    
  }
);

const SinglePageSlice = createSlice({
  name: "Single",
  initialState,
  reducers: {
    showRandom: (state, { payload }) => {
      state.hover = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMealSinglePage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMealSinglePage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.SingleMealData = payload.data.meals[0];
      })
      .addCase(getMealSinglePage.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getDrinkSinglePage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDrinkSinglePage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.SingleDrinkData = payload.data.drinks[0];
      })
      .addCase(getDrinkSinglePage.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { showRandom } = SinglePageSlice.actions;
export default SinglePageSlice.reducer;
