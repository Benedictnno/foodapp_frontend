import React from "react";
import { DrinksCardStyles } from "../Styles/DrinksCardStyles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDrinkSinglePage } from "../Slices/SinglePageSlice";
import { deleteProfile } from "../Slices/ProfileDataSlice";

function DrinksCard(props) {
  const dispatch = useDispatch();
  const { idDrink: id, strDrink: name, strDrinkThumb: image ,type,_id} = props.values;
  return (
    <DrinksCardStyles>
      <div className="item">
        <Link to={`/drink/${id}`}>
          <img
            src={image}
            alt="Drink png"
            onClick={() => dispatch(getDrinkSinglePage(id))}
          />
        </Link>
        <h1>
          {name}
          {type && (
            <button type="button" className="SignUp_Btn" onClick={()=>dispatch(deleteProfile(_id))}>
              Delete
            </button>
          )}
        </h1>
      </div>
    </DrinksCardStyles>
  );
}

export default DrinksCard;
