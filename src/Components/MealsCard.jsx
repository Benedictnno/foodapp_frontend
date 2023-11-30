import React from "react";
import { DrinksCardStyles } from "../Styles/DrinksCardStyles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProfile } from "../Slices/ProfileDataSlice";

function MealsCard(props) {
  const { idMeal:id,strMeal: name, strMealThumb: image,type ,_id}=props.values
  const dispatch = useDispatch()
  
  return (
    <DrinksCardStyles>
      <div className="item">
        <Link to={`/meal/${id}`}>
          <img src={image} alt="" />
        </Link>
        <h1>
          {name}
          {type && (
            <button
              type="button"
              className="SignUp_Btn"
              onClick={() => dispatch(deleteProfile(_id))}
            >
              Delete
            </button>
          )}
        </h1>
      </div>
    </DrinksCardStyles>
  );
}

export default MealsCard;
