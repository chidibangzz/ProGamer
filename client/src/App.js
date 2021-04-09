import React, { useState } from 'react';
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
import SearchContext from './utils/SearchContext';



function App() {

  const [allGames, setAllGames] = useState([]);
  const [favoriteGames, setFavoriteGames] = useState([]);

  // Nice code snippet to get unique items from an array of objects: https://stackoverflow.com/questions/43374112/filter-unique-values-from-an-array-of-objects/43374273
  // This function will return unique games by their Id. Its best to NOT show duplicates in DOM
  function setUniqueGames(games, userClickedGameAsWishList) {  // 2nd paramerter will keep track of the game that the user click on, default is empty
    const uniqueGames = [];

    games.forEach(function (game) {

      var index = uniqueGames.findIndex(x => x.id == game.id);

      if (index <= -1) {

        if (userClickedGameAsWishList.name &&
          userClickedGameAsWishList.name === game.name) { // if user clicked on this game then mark as isFavorite. Let's not show wishlist again
          game.isFavorite = true;
        }

        uniqueGames.push(game);
      }
    });
    setAllGames(uniqueGames); // Set all games, but only the unique ones
  }

  return (
    <>
      <Router>
        <SearchContext.Provider value={{ allGames, favoriteGames, setFavoriteGames, setUniqueGames }}>
          <Navbar />
          <SearchForm />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/carditem' component={CardItem} />
          </Switch>
        </SearchContext.Provider>
      </Router>
    </>
  );
}

export default App;

