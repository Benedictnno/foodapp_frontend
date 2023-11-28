import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDrinkSinglePage } from "../Slices/SinglePageSlice";

function SingleDrinkPage() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrinkSinglePage(params.id));
  }, []);

  const {
    SingleDrinkData: { drinks },
  } = useSelector((store) => store.SinglePage);
  const {
    strDrink,
    strDrinkThumb,
    strGlass,
    strCategory,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strInstructions,
  } = drinks[0];

  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
  ];
  return (
    <main>
      <section>
        <img src={strDrinkThumb} alt="single drink image" />
        <div>
          <h1>{strDrink}</h1>
          <h2>
            Glass : <span>{strGlass}</span>
          </h2>
          <h2>
            Category : <span>{strCategory}</span>
          </h2>
        </div>
      </section>

      <section>
        <div>
          <h1>Ingredients</h1>
          <ol>
            {ingredients.map((item, index) => {
              if (!item) return;
              return <li key={index}>{item}</li>;
            })}
          </ol>
        </div>
        <div>
          <h1>Instructions</h1>
          <p>{strInstructions}</p>
        </div>
      </section>
    </main>
  );
}

export default SingleDrinkPage;
