import React from "react";
import { Link, Outlet } from "react-router-dom";
import { TopNavStyled, TopStyled } from "../Styles/TopNavStyle";
import { useSelector } from "react-redux";

function HomePage() {
  const { user } = useSelector((store) => store.auth);

  return (
    <TopStyled>
      <TopNavStyled>
        <h2>
          <Link to={"/"} className="navLink">
            Delicacy <span>Hub</span>
          </Link>{" "}
        </h2>
        {!user ? (
          <Link to={"profile-page"} className="SignUp_Btn">
            Sign Up
          </Link>
        ) : (
          <Link to={"profile-page"} className="SignUp_Btn_nc navLink">
            Profile <span className="dot"> </span>{" "}
          </Link>
        )}
      </TopNavStyled>
      <Outlet />
    </TopStyled>
  );
}

export default HomePage;
