import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TopNavStyled, TopStyled } from "../Styles/TopNavStyle";
import { Link, useNavigate } from "react-router-dom";
import { getAllProfiles } from "../Slices/ProfileDataSlice";
import MealsCard from "../Components/MealsCard";
import DrinksCard from "../Components/DrinksCard";
import { DrinksCardStyles } from "../Styles/DrinksCardStyles";
import { getUserfromLocalStorage, removeUserfromLocalStorage } from "../Utils/localStorage";

const ProfilePage = () => {
  const {user} = getUserfromLocalStorage()

  const dispatch = useDispatch();
  const { profileDatas, isDeleted } = useSelector((store) => store.Profiles);
  useEffect(() => {
    dispatch(getAllProfiles());
  }, [isDeleted]);
const navigate= useNavigate()
  function logOut() {
    removeUserfromLocalStorage()
    navigate('/')
  }

  return (
    <>
      <TopNavStyled className="Profile_space">
        <h2>
          <Link to={"/"} className="navLink">
            Hello <span>{user.name}</span>
          </Link>{" "}
        </h2>
        <h2 className="SignUp_Btn" onClick={logOut}>
          LogOut
        </h2>
      </TopNavStyled>

      <TopStyled>
        <h2>{profileDatas.length} Items Found </h2>
        <button>Meal</button>
        <button>Drinks</button>
        <DrinksCardStyles>
          {profileDatas
            .filter((item) => item.type === "meal")
            .map((item, index) => {
              return <MealsCard values={item} key={index} />;
            })}
          {profileDatas
            .filter((item) => item.type === "drink")
            .map(({ idMeal, strMeal, strMealThumb, type, _id }, index) => {
              return (
                <DrinksCard
                  values={{
                    idDrink: idMeal,
                    strDrink: strMeal,
                    strDrinkThumb: strMealThumb,
                    type,
                    _id,
                  }}
                  key={index}
                />
              );
            })}
        </DrinksCardStyles>
      </TopStyled>
    </>
  );
};

export default ProfilePage;
