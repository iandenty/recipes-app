import React, { PureComponent } from 'react';

import './RecipesList.css';

// components
import RecipeItem from '../RecipeItem';

class RecipesList extends PureComponent {
    state = {
        recipes: []
    }

    async componentDidMount() {
      try {
        const res = await fetch('/api/recipes');
        const recipes = await res.json();
        this.setState({
          recipes: recipes
        });
      } catch (e) {
        console.error(e);
      }
    }

    render() {
      return (
        <div className="recipes-list">
          { this.state.recipes.length > 0 ?
            <ul className="recipes-list__list">
              {this.state.recipes
                .map(recipe => <RecipeItem 
                  id={recipe.id}
                  name={recipe.name} 
                  cookingTime={recipe.cookingTime}
                  image={recipe.image}
                  ingredients={recipe.mainIngredients}
                  key={recipe.id}
                />)
              }
            </ul>
          :
            <strong className="recipes-list__warning">Sorry, we currently have no recipes for you</strong>
          }
        </div>
      )
    }
}


export default RecipesList;
