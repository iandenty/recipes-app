import React from 'react';

// components
import Hero from '../Hero';
import RecipesList from '../RecipesList';
import RecipesFilter from '../RecipesFilter';

const RecipesPage = () => (
  <div>
    <Hero 
      title="Recipe App" 
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
    />
    <section className="content">
      <RecipesFilter />
      <div className="inner">
        <h2 className="visually-hidden">Recipes</h2>
        <RecipesList />
      </div>
    </section>
  </div>
)

export default RecipesPage;
