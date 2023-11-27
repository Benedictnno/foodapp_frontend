import React from "react";
import { useSelector } from "react-redux";
import { TopNavStyled } from "../Styles/TopNavStyle";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const {
    user: { user },
  } = useSelector((store) => store.auth);

  return (
    <TopNavStyled className='Profile_space'>
      <h2>
        <Link to={"/"} className="navLink">
          Hello <span>{user.name}</span>
        </Link>{" "}
      </h2>
      <h2 className="SignUp_Btn">LogOut</h2>

    </TopNavStyled>
  );
};

export default ProfilePage;
