import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TopNavStyled } from "../Styles/TopNavStyle";
import { Link } from "react-router-dom";
import { getAllProfiles } from "../Slices/ProfileDataSlice";
import MealsCard from "../Components/MealsCard";
import DrinksCard from "../Components/DrinksCard";
import { DrinksCardStyles } from "../Styles/DrinksCardStyles";

const ProfilePage = () => {
  const {
    user: { user },
  } = useSelector((store) => store.auth);
  const [isMeal, setIsMeal] = useState(true);

  const dispatch = useDispatch();
  const { profileDatas } = useSelector((store) => store.Profiles);
  useEffect(() => {
    dispatch(getAllProfiles());
  }, []);

  return (
    <>
      <TopNavStyled className="Profile_space">
        <h2>
          <Link to={"/"} className="navLink">
            Hello <span>{user.name}</span>
          </Link>{" "}
        </h2>
        <h2 className="SignUp_Btn">LogOut</h2>
      </TopNavStyled>
      <div>
        <button>Meal</button>
        <button>Drinks</button>
      </div>
      <DrinksCardStyles>
        {profileDatas
          .filter((item) => item.type === "meal")
          .map((item, index) => {
            return <MealsCard values={item} key={index} />;
          })}
        {profileDatas
          .filter((item) => item.type === "drink")
          .map(({ idMeal, strMeal, strMealThumb }, index) => {
            return (
              <DrinksCard
                values={{
                  idDrink: idMeal,
                  strDrink: strMeal,
                  strDrinkThumb: strMealThumb,
                }}
                key={index}
              />
            );
          })}
      </DrinksCardStyles>
    </>
  );
};

export default ProfilePage;
