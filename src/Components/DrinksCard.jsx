import React from "react";
import { DrinksCardStyles } from "../Styles/DrinksCardStyles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDrinkSinglePage } from "../Slices/SinglePageSlice";

function DrinksCard(props) {
  const dispatch = useDispatch();
  return (
    <DrinksCardStyles>
      {props.values?.map(
        ({ idDrink: id, strDrink: name, strDrinkThumb: image }, index) => {
          return (
            <div key={index} className="item">
              <Link to={`/drink/${id}`}>
                <img
                  src={image}
                  alt="Drink png"
                  onClick={() => getDrinkSinglePage(id)}
                />
              </Link>
              <h1>{name}</h1>
            </div>
          );
        }
      )}
    </DrinksCardStyles>
  );
}

export default DrinksCard;
