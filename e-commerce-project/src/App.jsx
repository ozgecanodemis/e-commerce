import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import './index.css';
import ShopPage from './pages/ShopPage';
import ProductDetails from './pages/ProductDetails.jsx';

const App = () => {
  return (

    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/product/:id" component={ProductDetails} />
        </Switch>
      </Layout>
    </Router>

  );
};

export default App;
