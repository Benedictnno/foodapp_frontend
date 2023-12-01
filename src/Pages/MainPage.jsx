import React, { useEffect } from "react";
import jollof from "../Images/jollof.jpg";
import blob from "../Images/blobanimation.svg";
import { MainPageStyles } from "../Styles/MainpageStyles";
import { getRandomCockTail, getRandomMeal } from "../Slices/randomMealsSlice";
import { useDispatch, useSelector } from "react-redux";
import Random from "../Components/Random";
import { getMealCategory } from "../Slices/categoriesSlice";
import MainCategory from "../Components/MainCategory";
import MainPageBottom from "../Components/MainPageBottom";

function MainPage() {
   const dispatch = useDispatch();

   useEffect(() => {
     dispatch(getRandomCockTail());
     dispatch(getRandomMeal());
     dispatch(getMealCategory());
   }, []);
  
  return (
    <>
      <MainPageStyles>
        <article>
          <h1>Imagination Beyond Food And Cocktails</h1>
          <p>
            Welcome to the world of culinary exploration, where Delicacy Hub
            transforms cooking into an art and dining into an experience. We're
            your all-in-one platform designed to cater to both novice cooks and
            seasoned chefs alike, offering an extensive array of recipes,
            ingredients, and inspiration.
          </p>
        </article>
        <div className="blob_container">
          <img src={blob} alt="" className="blob" />
          <img src={jollof} alt="jollof" className="img" />
        </div>
      </MainPageStyles>
      <Random />
      <MainCategory />
      <MainPageBottom/>
    </>
  );
}

export default MainPage;
