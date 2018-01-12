import React, { PureComponent } from 'react';

// components
import Hero from '../Hero';
import RecipeDetail from '../RecipeDetail';

class Recipe extends PureComponent {
    state = {
        recipe: {}
    }

    async componentDidMount() {
      try {
        const res = await fetch(`/api/recipes/${this.props.match.params.id}`);
        const recipe = await res.json();
        this.setState({
          recipe: recipe
        })
      } catch (e) {
        console.error(e);
      }
    }

    render() {
      return (
        <div>
          <Hero 
            title="Recipes app"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            classes="hero--page"
          />
          <section className="content">
            <h2 className="visually-hidden">Recipes</h2>
            <div className="inner">
              <RecipeDetail {...this.state.recipe} />
            </div>
          </section>
        </div>
      )
    }
}


export default Recipe;
