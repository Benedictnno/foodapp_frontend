import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDrinkSinglePage } from "../Slices/SinglePageSlice";

function SingleDrinkPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const {
    SingleDrinkData: { drinks },
  } = useSelector((store) => store.SinglePage);
  useEffect(() => {
    dispatch(getDrinkSinglePage(params.id));
  }, []);
  const { strDrink, strDrinkThumb } = drinks[0];
  return (
    <main>
      <section>
        <img src={strDrinkThumb} alt="single drink image" />
        <div>
          <h1>{strDrink}</h1>
        </div>
      </section>
    </main>
  );
}

export default SingleDrinkPage;
