import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import RecipesPage from './components/RecipesPage';
import RecipePage from './components/RecipePage';

import './footer.css';

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={RecipesPage} />
        <Route  exact path="/:id" component={RecipePage} />
      </Switch>
      <footer className="footer">
        <span className="footer__title">ian denty</span>
      </footer>
    </div>
  </Router>
)

export default App;
