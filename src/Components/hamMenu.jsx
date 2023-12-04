import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryInputValue,
  close,
  getMealCategory,
  getSelectedInputCategory,
  toggleCategories,
} from "../Slices/categoriesSlice";
import { IoCloseSharp } from "react-icons/io5";

function HamMenu() {
  const { fullMealCategories, fullDrinkCategories, isMeals } = useSelector(
    (store) => store.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //    dispatch(getRandomCockTail());

    //    dispatch(getRandomMeal());
    dispatch(getMealCategory());
    if (isMeals) {
      handleMealCategoryClick("Chicken");
    } else {
      handleDrinkCategoryClick("Cocktail");
    }
  }, [isMeals]);

  const handleMealCategoryClick = (cat) => {
    dispatch(categoryInputValue(cat)), dispatch(getSelectedInputCategory());
  };
  const handleDrinkCategoryClick = (cat) => {
    dispatch(categoryInputValue(cat)), dispatch(getSelectedInputCategory());
  };

  const handleSelect = (cat) => {
    dispatch(selectedInputValue(cat)), dispatch(getSelectedInputCategory());
  };
  return (
    <div className="Ham_menu">
      {!isMeals && (
        <section>
          <div>
            <h2>Major ingredients</h2>{" "}
            <IoCloseSharp onClick={() => dispatch(close())} />
            <div className="btnContainer">
              <button
                type="button"
                className={isMeals ? "Btn " : "SignUp_Btn_nc"}
                onClick={() => dispatch(toggleCategories(true))}
              >
                Meals
              </button>

              <button
                type="button"
                className={!isMeals ? "Btn space" : "SignUp_Btn_nc"}
                onClick={() => dispatch(toggleCategories(false))}
              >
                Drinks
              </button>
            </div>
          </div>
          {fullDrinkCategories.map((item, index) => {
            return (
              <div
                className="ingredients_text"
                key={index}
                onClick={() => {
                  handleDrinkCategoryClick(item.name), dispatch(close());
                }}
              >
                {item.name}
              </div>
            );
          })}
        </section>
      )}
      {isMeals && (
        <section>
          <div>
            <h2>Major ingredients</h2>
            <IoCloseSharp onClick={() => dispatch(close())} />
            <div className="btnContainer">
              <button
                type="button"
                className={isMeals ? "Btn " : "SignUp_Btn_nc"}
                onClick={() => dispatch(toggleCategories(true))}
              >
                Meals
              </button>
              <span></span>
              <button
                type="button"
                className={!isMeals ? "Btn" : "SignUp_Btn_nc space"}
                onClick={() => dispatch(toggleCategories(false))}
              >
                Drinks
              </button>
            </div>
          </div>

          {fullMealCategories.map((item, index) => {
            return (
              <div
                className="ingredients_text"
                key={index}
                onClick={() => {
                  handleMealCategoryClick(item.strCategory), dispatch(close());
                }}
              >
                {item.strCategory}
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}

export default HamMenu;
