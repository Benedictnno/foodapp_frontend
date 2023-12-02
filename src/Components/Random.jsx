import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegStar } from "react-icons/fa6";
import { RandomStyles, RandomStylesContainer } from "../Styles/RandomStyles";
import { Link } from "react-router-dom";

function Random() {
  const {
    isLoading,
    randomCockTailData: { idDrink, strDrinkThumb, strDrink },
    randomMealData: { idMeal, strMealThumb, strMeal },
  } = useSelector((store) => store.randomMeal);
  const dispatch = useDispatch();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <RandomStylesContainer>
      <h1>Random Meals and CockTails You should try Out</h1>
      <RandomStyles>
        <div className="detail_container">
          <Link to={`/meal/${idMeal}`}>
            <img src={strMealThumb} alt="meal image" />
          </Link>
          <div className="detail">
            <h1>{strMeal}</h1>
            <h2>
              <FaRegStar size={30} />
            </h2>
          </div>
        </div>
        <div className="detail_container">
          <Link to={`/drink/${idDrink}`}>
            <img src={strDrinkThumb} alt="drink image" />
          </Link>
          
          <div className="detail">
            <h1>{strDrink}</h1>
            <h2>
              <FaRegStar size={30} />
            </h2>
          </div>
        </div>
      </RandomStyles>
    </RandomStylesContainer>
  );
}

export default Random;
