import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainCategoryStyles } from "../Styles/MainCategotyStyle";
import { Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import { toggleCategories } from "../Slices/categoriesSlice";
import { getUserfromLocalStorage } from "../Utils/localStorage";
function MainCategory() {
  const { isLoading, mealCategories, drinkCategories } = useSelector(
    (store) => store.category
  );
  const user = getUserfromLocalStorage();
  const dispatch = useDispatch();

  return (
    <section>
      <div className="titles_container">
        <h1>Meals Major categories</h1>
        <Link
          to={"/categories"}
          className="categories_link"
          onClick={() => dispatch(toggleCategories(true))}
        >
          <span>See More</span>
          <span className="categories_link_icon">
            <MdExpandMore size={30} />
          </span>
        </Link>
      </div>
      <MainCategoryStyles>
        {mealCategories.map((items, index) => {
          const { strCategoryThumb, strCategory } = items;
          return (
            <div key={index}>
              <img src={strCategoryThumb} alt="" />
              <h1>{strCategory}</h1>
            </div>
          );
        })}
      </MainCategoryStyles>

      <div className="titles_container">
        <h1>Drinks Major ingredient's</h1>{" "}
        <Link
          to={"/categories"}
          className="categories_link"
          onClick={() => dispatch(toggleCategories(false))}
        >
          See More <MdExpandMore size={30} />
        </Link>
      </div>
      <MainCategoryStyles>
        {drinkCategories.map((items, index) => {
          const { image, name } = items;
          return (
            <div key={index}>
              <img src={image} alt={name} className="drinksImg" />
              <h1>{name}</h1>
            </div>
          );
        })}
      </MainCategoryStyles>
      {!user && (
        <article className="SignUp_container">
          <p>Sign Up to get free recipes on your favorite meals</p>
          <Link to={"/Login"} className="SignUp_Btn">
            Sign Up
          </Link>
        </article>
      )}
    </section>
  );
}

export default MainCategory;
