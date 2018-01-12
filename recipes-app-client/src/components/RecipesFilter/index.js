import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './RecipesFilter.css';

import search from './search.svg';
import add from './add.svg';

class RecipesFilter extends Component {
  state = {
    isOpen: false
  }

  handleClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }
  
  handleSubmit(e) {
    e.preventDefault();
    console.warn('This filter interaction is not yet implemented! 😬');
  }

  render() {
    return (
      <div className="recipes-filter">
        <button 
          id="recipes-filter-trigger"
          className={`recipes-filter__trigger ${this.state.isOpen ? 'recipes-filter__trigger--active' : ''}`}
          aria-controls="recipes-filter-panel"
          aria-expanded={this.state.isOpen}
          role="tab"
          onClick={ () => this.handleClick()}
        >
          <span className="visually-hidden">Toggle recipes filters panel</span>
          <img src={search} className="recipes-filter__icon" alt="search icon" />
        </button>
        <div 
          id="recipes-filter-panel"
          className={`recipes-filter__panel ${this.state.isOpen ? 'recipes-filter__panel--active' : ''}`}
          aria-labelledby="recipes-filter-trigger"
          aria-hidden={this.state.isOpen}
          role="tabpanel"
        >
          <form 
            method="GET" 
            action="/api/recipes" 
            name="recipes-filter"
            onSubmit={(e) => this.handleSubmit(e) }
          >
            <input type="text" name="ingredients" placeholder="" className="recipes-filter__input"/>
            <button type="submit" className="recipes-filter__submit">
              <img src={add} className="recipes-filter__icon" alt="search icon" />
            </button>

            <button
              type="button" 
              name="favourite"
              value="favourite"
              className="recipes-filter__submit recipes-filter__submit--favourite"
              >
              <span className="visually-hidden">
                Favourite this recipe!
              </span>
              <span className="recipes-filter__favourite">☆</span>
            </button>
          </form>
        </div>
      </div>
    )
  }
}


RecipesFilter.propTypes = {

};

export default RecipesFilter;