import React from "react";
import { DrinksCardStyles } from "../Styles/DrinksCardStyles";

function MealsCard(props) {
  console.log('====================================');
  console.log(props);
  console.log('====================================');
  return (
    <DrinksCardStyles>
      {props.values?.map(({ strMeal: name, strMealThumb: image }, index) => {
        return (
          <div key={index} className="item">
            <img src={image} alt="" />
            <h1>{name}</h1>
          </div>
        );
      })}
    </DrinksCardStyles>
  );
}

export default MealsCard;
