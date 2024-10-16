import React, { useState, useEffect } from "react";
import { DrinksCardStyles } from "../Styles/DrinksCardStyles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDrinkSinglePage } from "../Slices/SinglePageSlice";
import { deleteProfile } from "../Slices/ProfileDataSlice";
import { Blurhash } from "react-blurhash";
import LazyImageLoad from "react-lazy-load";
function DrinksCard(props) {
  const [imageLoading, setImageLoading] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = props;
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: image,
    type,
    _id,
  } = props.values;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoading(true);
    };
    img.src = image;
  }, [image]);
  // if(isLoading){
  //   return (
  //     <>
  //       <div
  //         className="skeleton cardLoaderHead"

  //       ></div>
  //       <div className="skeleton cardLoaderText"></div>
  //     </>
  //   );
  // }
  return (
    <DrinksCardStyles>
      <div className="item">
        <Link to={`/drink/${id}`}>
          <LazyImageLoad
            key={image}
            height={"100%"}
            width={"100%"}
            effect="blur"
            placeHolderSrc={image}
            onClick={() => dispatch(getDrinkSinglePage(id))}
          >
            <img src={image} alt="Drink img" loading="lazy" />
          </LazyImageLoad>
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

export default DrinksCard;
