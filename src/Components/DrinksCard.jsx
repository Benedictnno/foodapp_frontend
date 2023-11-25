import React from 'react'
import { DrinksCardStyles } from '../Styles/DrinksCardStyles';

function DrinksCard(props) {
  return (
    <DrinksCardStyles>
      {props.values?.map(({ strDrink: name, strDrinkThumb: image },index) => {
        return (
          <div key={index} className='item'>
            <img src={image} alt="" />
            <h1>{name}</h1>
          </div>
        );
      })}
    </DrinksCardStyles>
  );
}

export default DrinksCard
