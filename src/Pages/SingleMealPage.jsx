import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMealSinglePage } from "../Slices/SinglePageSlice";
import { FaRegStar } from "react-icons/fa6";

function SingleMealPage() {
  const {
    SingleMealData: {
      strMeal,
      strMealThumb,
      strArea,
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
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
      strIngredient16,
      strIngredient17,
      strInstructions,
    },
  } = useSelector((store) => store.SinglePage);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMealSinglePage(params.id));
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
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
  ];
  return (
    <>
      {strMeal ? (
        <main>
          <section className="SinglePage_page_con">
            <img
              src={strMealThumb}
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
                <h1>{strMeal}</h1>

                <FaRegStar size={40} />
              </div>
              <h2>
                Area : <span className="Btn">{strArea}</span>
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
        <h1>No meal available</h1>
      )}
    </>
  );
}

export default SingleMealPage;
