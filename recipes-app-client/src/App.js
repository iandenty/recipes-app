import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import RecipesPage from './components/RecipesPage';

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={RecipesPage} />
      </Switch>
    </div>
  </Router>
)

export default App;
