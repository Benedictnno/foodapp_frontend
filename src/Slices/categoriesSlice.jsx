import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isMeals: true,
  mealCategories: [],
  fullMealCategories: [],
  fullDrinkCategories: [
    {
      name: "Alcoholic",
      image: "https://www.thecocktaildb.com/images/ingredients/Vodka.png",
    },
    {
      name: "non Alcoholic",
      image: "https://www.thecocktaildb.com/images/ingredients/Vodka.png",
    },
    {
      name: "Vodka",
      image: "https://www.thecocktaildb.com/images/ingredients/Vodka.png",
    },
    {
      name: "gin",
      image: "https://www.thecocktaildb.com/images/ingredients/Gin.png",
    },
    {
      name: "Rum",
      image: "https://www.thecocktaildb.com/images/ingredients/Rum.png",
    },
    {
      name: "Tequila",
      image: "https://www.thecocktaildb.com/images/ingredients/Tequila.png",
    },
    {
      name: "Prosecco",
      image: "https://www.thecocktaildb.com/images/ingredients/Prosecco.png",
    },
    {
      name: "151 proof rum",
      image:
        "https://www.thecocktaildb.com/images/ingredients/151%20proof%20rum.png",
    },
    {
      name: "Lemon Juice",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Lemon%20Juice.png",
    },
    {
      name: "Nutmeg",
      image: "https://www.thecocktaildb.com/images/ingredients/Nutmeg.png",
    },
    {
      name: "Cinnamon",
      image: "https://www.thecocktaildb.com/images/ingredients/Cinnamon.png",
    },
    {
      name: "Dark Rum",
      image: "https://www.thecocktaildb.com/images/ingredients/Dark%20Rum.png",
    },
    {
      name: "White Rum",
      image: "https://www.thecocktaildb.com/images/ingredients/White%20Rum.png",
    },
    {
      name: "Salt",
      image: "https://www.thecocktaildb.com/images/ingredients/Salt.png",
    },
  ],
  drinkCategories: [
    {
      name: "Vodka",
      image: "https://www.thecocktaildb.com/images/ingredients/Vodka.png",
    },
    {
      name: "gin",
      image: "https://www.thecocktaildb.com/images/ingredients/Gin.png",
    },
    {
      name: "Rum",
      image: "https://www.thecocktaildb.com/images/ingredients/Rum.png",
    },
    {
      name: "Tequila",
      image: "https://www.thecocktaildb.com/images/ingredients/Tequila.png",
    },
  ],
};
export const getMealCategory = createAsyncThunk(
  "meals category",
  async (_, thunk) => {
    try {
      const reps = axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      return reps;
    } catch (error) {
      console.log(error);
    }
  }
);

const getMealCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    toggleCategories:(state,payload)=>{
      state.isMeals = payload.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMealCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMealCategory.fulfilled, (state, { payload }) => {
        let shortCategory = payload.data.categories.slice(0, 3);
        state.isLoading = false;
        state.fullMealCategories = payload.data.categories;
        state.mealCategories = shortCategory;
      })
      .addCase(getMealCategory.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { toggleCategories } = getMealCategorySlice.actions;

export default getMealCategorySlice.reducer;
