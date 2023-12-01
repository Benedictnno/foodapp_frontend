import React from "react";
import { DrinksCardStyles } from "../Styles/DrinksCardStyles";

function MainPageBottom() {
  const textData = [
    {
      Header: "📖 Diverse Recipe Database for Every Palate",
      text: "Embark on a culinary journey with our vast collection of recipes sourced from across the globe. From quick and easy weeknight dinners to extravagant feasts, find the perfect recipe to suit your taste.",
    },
    {
      Header: "🥦 Detailed Ingredients and Foolproof Instructions",
      text: "Navigate the world of cooking effortlessly with our step-by-step instructions and comprehensive ingredient lists. Cooking has never been more accessible, ensuring success in every dish you create.",
    },

    {
      Header: "🍹 Categories Tailored to Your Preferences",
      text: "Explore recipes curated by cuisine, dietary preferences, and occasions. Whether you're a health-conscious individual, a vegetarian enthusiast, or planning a festive gathering, Delicacy Hub has a category that suits your needs.",
    },
  ];

  return (
    <DrinksCardStyles>
      {textData.map(({ Header, text }, index) => {
        return (
          <div key={index} className="mainCard">
            <h2>{Header}</h2>
            <p> {text} </p>
          </div>
        );
      })}
    </DrinksCardStyles>
  );
}

export default MainPageBottom;
