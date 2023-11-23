import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegStar } from "react-icons/fa6";
import { RandomStyles, RandomStylesContainer } from "../Styles/RandomStyles";

function Random() {
  const {
    isLoading,
    randomCockTailData: { drinks },
    randomMealData: { meals },
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
          <img src={meals && meals[0]?.strMealThumb} alt="meal image" />
          <div className="detail">
            <h1>{meals ? meals[0]?.strMeal : "no meals"}</h1>
            <h2>
              <FaRegStar size={30} />
            </h2>
          </div>
        </div>
        <div className="detail_container">
          <img src={drinks && drinks[0]?.strDrinkThumb} alt="meal image" />
          <div className="detail">
            <h1>{drinks ? drinks[0]?.strDrink : "No drinks"}</h1>
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
