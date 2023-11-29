import { configureStore } from "@reduxjs/toolkit";
import auth from "./Slices/authSlice";
import randomReducer from "./Slices/randomMealsSlice";
import categoryReducer from "./Slices/categoriesSlice";
import SinglePageSlice from "./Slices/SinglePageSlice";
import ProfileDataSlice from "./Slices/ProfileDataSlice";

export default configureStore({
  reducer: {
    auth: auth,
    randomMeal: randomReducer,
    category: categoryReducer,
    SinglePage:SinglePageSlice,
    Profiles: ProfileDataSlice,
  },
});
