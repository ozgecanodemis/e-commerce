import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import './index.css';


const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product" component={ProductPage} />

        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
