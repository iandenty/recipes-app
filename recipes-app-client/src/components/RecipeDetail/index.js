import React from 'react';
import Overdrive from 'react-overdrive';
import PropTypes from 'prop-types';

import './RecipeDetail.css';
import clockIcon from './clock.svg';
import ingredientsIcon from './ingredients.svg';
import notFoundIcon from './not-found.svg';

const notFoundText = "Sorry, this recipe doesn't exist or may have been removed";

const RecipeDetail  = (props) => {
  const { 
    id,
    name, 
    cookingTime, 
    image, 
    ingredients
  } = props;

  const recipeDetailStyle = {
    backgroundImage: `url(${image})`
  };

  return (
    <div className="recipe-detail">
      <Overdrive id={`recipe-item-${id}`} className="recipe-detail__image-container">
        <div className="recipe-detail__image" style={recipeDetailStyle} />
      </Overdrive>
      { props.hasOwnProperty('id') ? 
        <div className="recipe-detail__content">
          <h2 className="recipe-detail__title">{name}</h2>
          <div className="recipe-detail__ingredients">
            <img src={ingredientsIcon} className="recipe-detail__icon" alt="ingredients icon" />
            <dl className="recipe-detail__table">
              { ingredients && 
                ingredients.map((ingredient, index) => {
                  return (
                    <div className="recipe-detail__table-row" key={`ingredient-row-${index}`}>
                      <dt className="recipe-detail__table-item">{ingredient.quantity}</dt>
                      <dd className="recipe-detail__table-item">{ingredient.name}</dd>
                    </div>
                  )
                }) 
              }
            </dl>
          </div>
          <div className="recipe-detail__time">
            <img src={clockIcon} className="recipe-detail__icon" alt="clock icon" />
            <span className="visually-hidden">Time to cook:</span>
            <span className="recipe-detail__time-text">{cookingTime}</span>
          </div>
        </div>
      :
        <div className="recipe-detail__content recipe-detail__content--empty">
          <p>{notFoundText}</p>
          <img src={notFoundIcon} className="recipe-detail__icon recipe-detail__icon--large" alt="clock icon" />
        </div>
      }
    </div>
  );
}

RecipeDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string, 
  cookingTime: PropTypes.string, 
  image: PropTypes.string, 
  ingredients: PropTypes.array
};

export default RecipeDetail;