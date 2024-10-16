import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryInputValue,
  getSelectedInputCategory,
  inputValue,
  selectedInputValue,
  toggleCategories,
  open,
  getSearchedMeal,
} from "../Slices/categoriesSlice";
import { getRandomCockTail, getRandomMeal } from "../Slices/randomMealsSlice";
import { getMealCategory } from "../Slices/categoriesSlice";
import { CategoryPageStyles } from "../Styles/CategopageStyles";
import { FiSearch } from "react-icons/fi";
import MealsCard from "../Components/MealsCard";
import DrinksCard from "../Components/DrinksCard";
import { DrinksCardStyles } from "../Styles/DrinksCardStyles";
import { HiMenuAlt1 } from "react-icons/hi";
import HamMenu from "../Components/hamMenu";

function CategoryPage() {
  const {
    fullMealCategories,
    inputSearchValue,
    selectedInput,
    fullDrinkCategories,
    isMeals,
    isLoading,
    categoryInput,
    CategoryValues,
    showMenu,
  } = useSelector((store) => store.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomCockTail());

    dispatch(getRandomMeal());
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
    <CategoryPageStyles>
      {!isMeals && (
        <section className=" show_menu ">
          <div className="fixed">
            <h2>Major ingredients</h2>
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
          <div className="text_fixed">
            {fullDrinkCategories.map((item, index) => {
              return (
                <div
                  className="ingredients_text "
                  key={index}
                  onClick={() => handleDrinkCategoryClick(item.name)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </section>
      )}
      {isMeals && (
        <section className="show_menu ">
          <div className="fixed">
            <h2>Major ingredients</h2>
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
          <div className="text_fixed">
            {fullMealCategories.map((item, index) => {
              return (
                <div
                  className="ingredients_text"
                  key={index}
                  onClick={() => handleMealCategoryClick(item.strCategory)}
                >
                  {item.strCategory}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {showMenu && <HamMenu />}

      <section>
        <div className="categoryInputContainer fixed">
          <HiMenuAlt1
            size={35}
            onClick={() => dispatch(open())}
            className="unShow_menu"
          />
          <div className="InputContainer">
            <FiSearch size={30} className="show_menu" />
            <input
              type="text"
              value={inputSearchValue}
              placeholder="Search for Meals and Drinks"
              onChange={(e) => dispatch(inputValue(e.target.value))}
              className="categoryInput"
              autoFocus
            />
          </div>
          <button
            type="button"
            className={"Btn SignUp_Btn_nc"}
            onClick={() => dispatch(getSearchedMeal())}
          >
            Search
          </button>
          <select
            name="A-Z"
            id=""
            value={selectedInput}
            onChange={(e) => handleSelect(e.target.value)}
            className="show_menu"
          >
            <option value="" selected disabled hidden>
              Search by first letter
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="H">H</option>
            <option value="I">I</option>
            <option value="J">J</option>
            <option value="K">K</option>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="N">N</option>
            <option value="O">O</option>
            <option value="P">P</option>
            <option value="Q">Q</option>
            <option value="R">R</option>
            <option value="S">S</option>
            <option value="T">T</option>
            <option value="U">U</option>
            <option value="V">V</option>
            <option value="W">W</option>
            <option value="X">X</option>
            <option value="Y">Y</option>
            <option value="Z">Z</option>
          </select>
        </div>
        {/* <div>
          {isMeals ? (
            <MealsCard values={CategoryValues?.meals} />
          ) : (
            <DrinksCard values={CategoryValues?.drinks} />
          )}
        </div> */}
        <DrinksCardStyles>
          {isMeals
            ? CategoryValues?.map((item, index) => {
                return <MealsCard values={item} isLoading={isLoading} key={index} />;
              })
            : CategoryValues?.map((item, index) => {
                return (
                  <DrinksCard values={item} isLoading={isLoading} key={index} />
                );
              })}
        </DrinksCardStyles>
      </section>
    </CategoryPageStyles>
  );
}

export default CategoryPage;
