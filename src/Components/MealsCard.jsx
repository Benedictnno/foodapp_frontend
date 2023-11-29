import React from "react";
import { DrinksCardStyles } from "../Styles/DrinksCardStyles";
import { Link } from "react-router-dom";

function MealsCard(props) {
  console.log('====================================');
  console.log(props);
  console.log('====================================');
  const { idMeal:id,strMeal: name, strMealThumb: image }=props.values
  return (
    <DrinksCardStyles>
     
          <div className="item">
            
          <Link to={`/meal/${id}`} >
            <img src={image} alt="" />
          </Link>
            <h1>{name}</h1>
          </div>
     
    </DrinksCardStyles>
  );
}

export default MealsCard;
