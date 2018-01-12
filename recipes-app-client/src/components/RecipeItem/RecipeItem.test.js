import React from 'react';
import { shallow } from 'enzyme';
import RecipeItem from '../RecipeItem';
import renderer from 'react-test-renderer';

describe('Recipe Item', () => { 
  const props = {
    "name": "Lemon Chicken", 
    "cookingTime": "30 minutes",
    "mainIngredients": ["Chicken","Lemon","Thyme"],
    "ingredients": [
      {"quantity": 4, "name": "Chicken Breasts"},
      {"quantity": "1 tsp", "name": "Thyme"},
      {"quantity": 1, "name": "Lemon"}
    ],
    "image": "http://assets.simplyrecipes.com/wp-content/uploads/2010/03/lemon-chicken-horiz-a-1600.jpg"
  };
  const handleHover = jest.fn();
  const component = shallow(
    <RecipeItem {...props} onMouseEnter={handleHover} onMouseLeave={handleHover} />
  );

  // Snapshot

  // Contains provided content
  it('contains the recipe name', () => {
    expect(component.find('h3').text())
      .toContain(props.name);
  });

  it('contains all ingredients', () => {
    expect(component.find('.recipe-item__ingredient'))
      .toHaveLength(props.mainIngredients.length);
  });

  it('contains cooking time', () => {
    expect(component.find('.recipe-item__time-text').text())
      .toContain(props.cookingTime);
  })

  // Interactions
});