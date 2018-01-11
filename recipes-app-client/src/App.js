import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import RecipesPage from './components/RecipesPage';
import RecipePage from './components/RecipePage';

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={RecipesPage} />
        <Route  exact path="/:id" component={RecipePage} />
      </Switch>
    </div>
  </Router>
)

export default App;
