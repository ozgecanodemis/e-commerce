import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './components/ProductPage';
import './index.css';
import ShopPage from './pages/ShopPage';
import TeamPage from './pages/TeamPage';


const App = () => {
  return (

    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/team" component={TeamPage} />
        </Switch>
      </Layout>
    </Router>

  );
};

export default App;
