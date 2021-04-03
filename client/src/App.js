import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import './css/App.css'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
import ImageSlider from "./components/Slider"
<<<<<<< HEAD


=======
import SearchForm from "./components/SearchForm"
>>>>>>> 96370fb54baf0e35e3181954bdaa9dfa18f283ca



function App() {

  return (
    <>
      <Router>
        <Navbar />
<<<<<<< HEAD
=======
        <li className='form-group'>
          <SearchForm/>   
      </li>
>>>>>>> 96370fb54baf0e35e3181954bdaa9dfa18f283ca
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

