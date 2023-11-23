import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { TopNavStyled, TopStyled } from "../Styles/TopNavStyle";
function HomePage() {
  return (
    <TopStyled>
      <TopNavStyled>
        <h2>
          <Link to={"/"} className="navLink">
            Delicacy <span>Hub</span>
          </Link>{" "}
        </h2>
        <h2>
          Profile <span className="dot">  </span>{" "}
        </h2>
      </TopNavStyled>
      <Outlet />
    </TopStyled>
  );
}

export default HomePage
