import React, { useEffect } from "react";
import jollof from "../Images/jollof.jpg";
import blob from "../Images/blobanimation.svg";
import { MainPageStyles } from "../Styles/MainpageStyles";
import { getRandomCockTail, getRandomMeal } from "../Slices/randomMealsSlice";
import { useDispatch, useSelector } from "react-redux";
import Random from "../Components/Random";
import { getMealCategory } from "../Slices/categoriesSlice";
import MainCategory from "../Components/MainCategory";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          optio eius, nulla molestias cum velit modi officia unde recusandae
          sapiente similique, accusantium officiis quis vel, consequuntur
          obcaecati nam beatae eligendi? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Nulla illo hic impedit, laudantium voluptatibus
          corrupti voluptas numquam similique iste ipsam.
        </p>
      </article>
      <div className="blob_container">
        <img src={blob} alt="" className="blob" />
        <img src={jollof} alt="jollof" className="img" />
      </div>
    </MainPageStyles>
      <Random/>
      <MainCategory/>
    </>
  );
}

export default MainPage;
