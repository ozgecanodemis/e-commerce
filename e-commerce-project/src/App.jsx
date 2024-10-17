import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product" component={ProductPage} />
          {/* Diğer rotalar buraya eklenebilir */}
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
