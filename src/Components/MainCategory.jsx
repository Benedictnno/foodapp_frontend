import React from "react";
import { useSelector } from "react-redux";
import { MainCategoryStyles } from "../Styles/MainCategotyStyle";
import { Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
function MainCategory() {
  const { isLoading, mealCategories, drinkCategories } = useSelector(
    (store) => store.category
  );

  return (
    <section>
      <div className="titles_container">
        <h1>Meals Major ingredient's</h1>{" "}
        <Link to={"/categories"} className="categories_link">
          See More <MdExpandMore size={25} />
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
        <Link to={"/categories"} className="categories_link">
          See More <MdExpandMore size={25} />
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
      <article className="SignUp_container">
        <p>Sign Up to get free recipes on your favorite meals</p>
        <Link className="SignUp_Btn">Sign Up</Link>
      </article>
    </section>
  );
}

export default MainCategory;