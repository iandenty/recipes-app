import React from 'react';

// components
import Hero from '../Hero';

const RecipesPage = () => (
  <div>
    <Hero 
      title="Recipe App" 
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
    />
    <section className="content">
      <h2 className="visually-hidden">Recipes</h2>
      <div className="inner">
      </div>
    </section>
  </div>
)

export default RecipesPage;
