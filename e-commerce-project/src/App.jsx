
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './components/ProductPage';
import ShopPage from './pages/ShopPage';
import TeamPage from './pages/TeamPage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import SignUpForm from './pages/SignUpForm';
import BlogPage from './pages/BlogPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/LoginPage';


const App = () => {


  return (

    <Router>
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
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
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;