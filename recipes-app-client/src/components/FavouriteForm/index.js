import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './FavouriteForm.css';

class FavouriteForm extends Component {
  state = {
    isFavourite: false
  }

  componentDidMount() {
    const isSet = localStorage.getItem('favourites');
    if(isSet) {
      const hasFavourited = localStorage.getItem('favourites')
        .split(',')
        .map(favourite => parseInt(favourite));

      if(hasFavourited.includes(this.props.id)) {
        this.setState(prevState => ({
          isFavourite: true
        })); 
      }
    }
  }

  // Using local storage to simulate user experience. Ideally would save to database using
  // action specified below.
  // TODO: Refactor into resusable functions which can be shared with componentDidMount logic.
  storeFavourited(favouritedId) {
    const isSet = localStorage.getItem('favourites');

    if(isSet) {
      const favourites = localStorage.getItem('favourites')
        .split(',')
        .map(favourite => parseInt(favourite));

      const favouriteIndex = favourites.findIndex(favourite => favourite === favouritedId);

      if(favouriteIndex === -1) {
        favourites.push(favouritedId);
        localStorage.setItem('favourites', favourites.join(','))
      } else {
        localStorage.setItem('favourites', favourites.filter(favourite => favourite !== favouritedId));
      }
    } else {
      localStorage.setItem('favourites', favouritedId);
    }
    this.setState(prevState => ({
      isFavourite: !prevState.isFavourite
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const favouritedId = parseInt(event.target.favourite.value);
    this.storeFavourited(favouritedId)
  }

  render() {
    const { 
      id
    } = this.props;

    // Represents endpoint to store favourited recipes. This app assumes user exists and is logged in.
    const action = `/api/recipes/${id}/favourite`;

    return (
      <div>
      { this.props.isForm ?
        <form 
          className="favourite"
          method="POST" 
          action={action}
          onSubmit={(e) => this.handleSubmit(e)} 
        >
          <button
            type="submit" 
            name="favourite"
            value={id}
            className={`favouite__button ${this.state.isFavourite ? 'favouite__button--active' : ''}`}
          >☆</button>
        </form>
      :
        <div className="favourite">
          <span
            className={`favouite__button ${this.state.isFavourite ? 'favouite__button--active' : ''}`}
          >☆</span>
        </div>
      }
      </div>
    );
  }
}

FavouriteForm.defaultProps = {
  isForm: true
}

FavouriteForm.propTypes = {
  id: PropTypes.number
};

export default FavouriteForm;
