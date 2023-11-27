import React from "react";
import { DrinksCardStyles } from "../Styles/DrinksCardStyles";
import { Link } from "react-router-dom";

function MealsCard(props) {
  console.log('====================================');
  console.log(props);
  console.log('====================================');
  return (
    <DrinksCardStyles>
      {props.values?.map(({ idMeal:id,strMeal: name, strMealThumb: image }, index) => {
        return (
          <div key={index} className="item">
          <Link to={`/meal/${id}`} >
            <img src={image} alt="" />
          </Link>
            <h1>{name}</h1>
          </div>
        );
      })}
    </DrinksCardStyles>
  );
}

export default MealsCard;
