import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import './css/App.css'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import ImageSlider from "./components/Slider"
import SearchForm from "./components/SearchForm"
import CardItem from './components/CardItem';



function App() {

  return (
    <>
      <Router>
        <Navbar />
        
          <SearchForm/>   
    
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='./carditem' component={CardItem} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

