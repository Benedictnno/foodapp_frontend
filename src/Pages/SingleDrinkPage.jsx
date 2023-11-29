import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDrinkSinglePage } from "../Slices/SinglePageSlice";
import { FaRegStar } from "react-icons/fa6";cccc

function SingleDrinkPage() {
  const {
    SingleDrinkData: {
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
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strInstructions,
    },
  } = useSelector((store) => store.SinglePage);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrinkSinglePage(params.id));
  }, []);

  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
  ];
  return (
    <>
      {strDrink ? (
        <main>
          <section className="SinglePage_page_con">
            <img
              src={strDrinkThumb}
              alt="single drink image"
              className="image"
            />
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "2rem",
                  marginBottom: "1rem",
                }}
              >
                <h1>{strDrink}</h1>

                <FaRegStar size={40} />
              </div>
              <h2>
                Glass : <span className="Btn">{strGlass}</span>
              </h2>
              <h2 className="top_space">
                Category : <span>{strCategory}</span>
              </h2>

              <div className="top_space">
                <h1>Ingredients</h1>
                <ol className="space">
                  {ingredients.map((item, index) => {
                    if (!item) return;
                    return <li key={index}>{item}</li>;
                  })}
                </ol>
              </div>
              <div className="top_space">
                <h1>Instructions</h1>
                <p>{strInstructions}</p>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <h1>No drinks available</h1>
      )}
    </>
  );
}

export default SingleDrinkPage;
