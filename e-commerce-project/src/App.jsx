import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './components/ProductPage';
import './index.css';
import ShopPage from './pages/ShopPage';
import TeamPage from './pages/TeamPage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import SignUpForm from './pages/SignUpForm';
import BlogPage from './pages/BlogPage';
import store from './store/reducers/store';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/about" component={AboutUs} />
            <Route path="/team" component={TeamPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/blog" component={BlogPage} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;