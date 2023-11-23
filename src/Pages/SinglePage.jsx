import React from 'react'
import { useSelector, useDispatch } from "react-redux";
function SinglePage() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return <div>SinglePage SinglePage</div>;
}

export default SinglePage
