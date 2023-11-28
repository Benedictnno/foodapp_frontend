import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMealSinglePage } from "../Slices/SinglePageSlice";
function SingleMealPage() {
  const params = useParams();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMealSinglePage(params.id));
  // }, []);
  return <div>SinglePage SinglePage</div>;
}

export default SingleMealPage;
