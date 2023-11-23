import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/authSlice";
import randomReducer from "./Slices/randomMealsSlice";
import categoryReducer from "./Slices/categoriesSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    randomMeal: randomReducer,
    category: categoryReducer,
  },
});
