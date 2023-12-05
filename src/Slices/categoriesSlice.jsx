import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isMeals: false,
  inputSearchValue: "",
  categoryInput: "",
  selectedInput: "",
  CategoryValues: [],
  mealCategories: [],
  fullMealCategories: [],
  fullDrinkCategories: [
    {
      name: "Alcoholic",
      image: "https://www.thecocktaildb.com/images/ingredients/Vodka.png",
    },
    {
      name: "Non_Alcoholic",
      image: "https://www.thecocktaildb.com/images/ingredients/Vodka.png",
    },
    {
      name: "Ordinary_Drink",
      image: "https://www.thecocktaildb.com/images/ingredients/Vodka.png",
    },
    {
      name: "Cocktail",
      image: "https://www.thecocktaildb.com/images/ingredients/Vodka.png",
    },
    {
      name: "Vodka",
      image: "https://www.thecocktaildb.com/images/ingredients/Vodka.png",
    },
    {
      name: "Gin",
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
      name: "Gin",
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

  showMenu: false,
};
const drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/";
const mealsUrl = "https://www.themealdb.com/api/json/v1/1/";

export const getMealCategory = createAsyncThunk(
  "meals category",
  async (_, thunk) => {
    try {
      const reps = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      return reps;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getSearchedMeal = createAsyncThunk(
  "getSearchedMeal",
  async (_, thunkAPI) => {
    const { isMeals, inputSearchValue } = thunkAPI.getState().category;

    if (isMeals) {
      try {
        const reps = await axios.get(
          `${mealsUrl}search.php?s=${inputSearchValue}`
        );
        return reps;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const reps = await axios.get(
          `${drinkUrl}search.php?s=${inputSearchValue}`
        );
        return reps;
      } catch (error) {
        console.log(error);
      }
    }
  }
);

export const getSelectedInputCategory = createAsyncThunk(
  "meals-category-value",
  async (_, thunkAPI) => {
    const { categoryInput, isMeals, selectedInput } =
      thunkAPI.getState().category;

    if (categoryInput === "Alcoholic" || categoryInput === "Non_Alcoholic") {
      try {
        const reps = await axios.get(
          `${drinkUrl}filter.php?a=${categoryInput}`
        );
        return reps;
      } catch (error) {
        console.log(error);
      }
    } else if (
      categoryInput === "Ordinary_Drink" ||
      categoryInput === "Cocktail"
    ) {
      try {
        const reps = await axios.get(
          `${drinkUrl}filter.php?c=${categoryInput}`
        );
        return reps;
      } catch (error) {
        console.log(error);
      }
    } else if (isMeals && selectedInput) {
      try {
        const reps = await axios.get(
          `${mealsUrl}search.php?f=${selectedInput}`
        );
        return reps;
      } catch (error) {
        console.log(error);
      }
    } else if (!isMeals && selectedInput) {
      console.log(selectedInput);
      try {
        const reps = await axios.get(
          `${drinkUrl}search.php?f=${selectedInput}`
        );
        return reps;
      } catch (error) {
        console.log(error);
      }
    } else if (!isMeals) {
      try {
        const reps = await axios.get(
          `${drinkUrl}filter.php?i=${categoryInput}`
        );
        return reps;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const reps = await axios.get(
          `${mealsUrl}filter.php?c=${categoryInput}`
        );
        return reps;
      } catch (error) {
        console.log(error);
      }
    }
  }
);

const getMealCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    toggleCategories: (state, payload) => {
      state.isMeals = payload.payload;
    },
    inputValue: (state, payload) => {
      state.inputSearchValue = payload.payload;
    },
    categoryInputValue: (state, payload) => {
      state.categoryInput = payload.payload;
    },
    selectedInputValue: (state, payload) => {
      state.selectedInput = payload.payload;
    },
    open: (state) => {
      state.showMenu = true;
    },
    close: (state) => {
      state.showMenu = false;
    },
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
      })
      .addCase(getSelectedInputCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSelectedInputCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.isMeals) {
          state.CategoryValues = payload.data.meals;
        } else {
          state.CategoryValues = payload.data.drinks;
        }
      })
      .addCase(getSelectedInputCategory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getSearchedMeal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchedMeal.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.isMeals) {
          state.CategoryValues = payload.data.meals;
        } else {
          state.CategoryValues = payload.data.drinks;
        }
      })
      .addCase(getSearchedMeal.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  toggleCategories,
  selectedInputValue,
  categoryInputValue,
  inputValue,
  selectedInput,
  open,
  close,
} = getMealCategorySlice.actions;

export default getMealCategorySlice.reducer;
