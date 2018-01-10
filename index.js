const express = require('express');
const slug = require('slugs');

const app = express();
const port = 5000;

app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

const recipesList = [
  {
    "name": "Lemon Chicken", 
    "cookingTime": "30 minutes",
    "mainIngredients": ["Chicken","Lemon","Thyme"],
    "ingredients": [
      {"quantity": 4, "name": "Chicken Breasts"},
      {"quantity": "1 tsp", "name": "Thyme"},
      {"quantity": 1, "name": "Lemon"}
    ],
    "image": "http://assets.simplyrecipes.com/wp-content/uploads/2010/03/lemon-chicken-horiz-a-1600.jpg"
  },
  {
    "name": "Beef Stroganoff", 
    "cookingTime": "30 minutes",
    "mainIngredients": ["Beef","Mustard","Mushrooms"],
    "ingredients": [
      {"quantity": "500g", "name": "Beef"},
      {"quantity": "1 tbsp", "name": "Mustard"},
      {"quantity": "400g", "name": "Mushrooms"}
    ],
    "image": "http://www.daringgourmet.com/wp-content/uploads/2014/12/Slow-Cooker-Beef-Stroganoff-2-web-edited.jpg"
  },
  {
    "name": "Ceasar Salad", 
    "cookingTime": "25 minutes",
    "mainIngredients": ["Lettuce","Croutons","Parmesan"],
    "ingredients": [
      {"quantity": "1 head", "name": "Lettuce"},
      {"quantity": "100g", "name": "Croutons"},
      {"quantity": "a grating", "name": "Parmesan"}
    ],
    "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--327831_11.jpg?itok=8GjuBS4F"
  },
  {
    "name": "Chicken Ceasar Salad", 
    "cookingTime": "35 minutes",
    "mainIngredients": ["Lettuce","Chicken","Parmesan"],
    "ingredients": [
      {"quantity": "1 head", "name": "Lettuce"},
      {"quantity": "2", "name": "Chicken Breasts"},
      {"quantity": "100g", "name": "Croutons"},
      {"quantity": "a grating", "name": "Parmesan"}
    ],
    "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--327831_11.jpg?itok=8GjuBS4F"
  },
  {
    "name": "Lamb biryani", 
    "cookingTime": "50 minutes",
    "mainIngredients": ["Lamb","Garlic","Onion"],
    "ingredients": [
      {"quantity": "400g", "name": "Lamb"},
      {"quantity": "1 tsp", "name": "Thyme"},
      {"quantity": 1, "name": "Onion"}
    ],
    "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/01/lamb-biryani.jpg?itok=C2AY-JQe"
  },
  {
    "name": "Beef Stroganoff", 
    "cookingTime": "30 minutes",
    "mainIngredients": ["Beef","Mustard","Mushrooms"],
    "ingredients": [
      {"quantity": "500g", "name": "Beef"},
      {"quantity": 4, "name": "Cloves of garlic"},
      {"quantity": "1 tsp", "name": "Ginger"},
      {"quantity": "1 tsp", "name": "Curry paste"},
      {"quantity": "400g", "name": "Mushrooms"}
    ],
    "image": "http://www.daringgourmet.com/wp-content/uploads/2014/12/Slow-Cooker-Beef-Stroganoff-2-web-edited.jpg"
  },
  {
    "name": "Ceasar Salad", 
    "cookingTime": "25 minutes",
    "mainIngredients": ["Lettuce","Croutons","Parmesan"],
    "ingredients": [
      {"quantity": "1 head", "name": "Lettuce"},
      {"quantity": "100g", "name": "Croutons"},
      {"quantity": "a grating", "name": "Parmesan"}
    ],
    "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--327831_11.jpg?itok=8GjuBS4F"
  },
  {
    "name": "Chicken Ceasar Salad", 
    "cookingTime": "35 minutes",
    "mainIngredients": ["Lettuce","Chicken","Parmesan"],
    "ingredients": [
      {"quantity": "1 head", "name": "Lettuce"},
      {"quantity": "2", "name": "Chicken Breasts"},
      {"quantity": "100g", "name": "Croutons"},
      {"quantity": "a grating", "name": "Parmesan"}
    ],
    "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--327831_11.jpg?itok=8GjuBS4F"
  }
];

// Mocking recipes data retrieved from a database. Have added an id which assumed
// to be unique from database record. Have added slug.
const recipes = recipesList.map((recipe, index) => {
  recipe.id = ++index;
  recipe.slug = slug(recipe.name);
  return recipe;
});