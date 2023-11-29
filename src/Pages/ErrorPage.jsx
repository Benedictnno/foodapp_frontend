import React from "react";
import ErrorImg from "../Images/error_bbq.png";
function ErrorPage() {
  return (
    <div>
      <img src={ErrorImg} alt="Error Image" />
      <h1>Route Does Not Exist go back to home page</h1>
    </div>
  );
}

export default ErrorPage;
