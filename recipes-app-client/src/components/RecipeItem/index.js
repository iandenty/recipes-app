import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';

import './RecipeItem.css';
import clock from './clock.svg';

class RecipeItem extends Component {
  state = {
    isHover: false
  }

  handleHover = () => {
    this.setState(prevState => ({
      isHover: !prevState.isHover
    }));
  }

  render() {
    const { 
      id,
      name, 
      cookingTime, 
      image, 
      ingredients
    } = this.props;

    const recipeItemStyle = {
      backgroundImage: `url(${image})`
    };
    const ingredientsItems = ingredients
      .map((ingredient, index) => <span className="recipe-item__ingredient" key={index}>{ingredient}</span>);

    return (
      <Link
        to={`/${id}`}
        className={`recipe-item ${this.state.isHover ? 'recipe-item--hover' : ''}`}  
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <div className="recipe-item__container">
          <h3 className="recipe-item__title">{name}</h3>
          <ul className="recipe-item__ingredients">{ingredientsItems}</ul>
          <Overdrive id={`recipe-item-${id}`} className="recipe-item__hero-container">
            <div className="recipe-item__hero-image" style={recipeItemStyle}>
              <div className="recipe-item__details">
                <div className="recipe-item__time">
                  <img src={clock} className="recipe-item__clock" alt="clock icon" />
                  <span className="visually-hidden">Time to cook:</span>
                  <span className="recipe-item__time-text">{cookingTime}</span>
                </div>
              </div>
            </div>
          </Overdrive>
        </div>
      </Link>
    );
  }
}

RecipeItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string, 
  cookingTime: PropTypes.string, 
  image: PropTypes.string, 
  ingredients: PropTypes.array
};

export default RecipeItem;