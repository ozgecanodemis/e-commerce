import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';


const App = () => {
  return (
    <Router>

      <div className="App">
        <Switch>
          {/* Ana sayfa */}
          <Route exact path="/" component={HomePage} />

          <Route path="*" render={() => <div>404 Not Found</div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
