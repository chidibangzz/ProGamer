import React, { useEffect, useState, useContext } from "react";

//import { render } from 'react-dom';
import { Link } from "react-router-dom";
import SearchContext from "../../utils/SearchContext";
import '../../App.css'
//import Cards from "../Cards"
import CardItem from "../CardItem"
import SearchForm from "../SearchForm"
import API from '../../utils/API'
import axios from "axios";

// const { REACT_APP_API_KEY } = process.env;
const BASEURL = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`;

function Products() {
  const {gameResults, setGameResults } = useContext(SearchContext);
  const [allGames, setAllGames] = useState([]); // list of all games but unique by Id

  useEffect(() => {
    setGameResults([]); // on initial load clear out search game results
    loadVideogames();
  }, []);  // run once only on page load and if you wanted to run mutlitple times you can pass in param function in arra

  async function loadVideogames() {
    let videoGamesApi = await axios.get(BASEURL);
    videoGamesApi = videoGamesApi.data.results;
    console.log("video games from API", videoGamesApi);

    let favoriteGames = await API.getFavoriteGames(); // Get all favorite games and add extra property isFavorite. We will use in DOM, to show/hide wishlist
    favoriteGames = favoriteGames.data;
    favoriteGames = favoriteGames.map(game => {
      return {
        ...game,
        isFavorite: true
      }
    });
    console.log("favorite games from database", favoriteGames);

    const games = favoriteGames.concat(videoGamesApi); // Load favorite and API games into 1 single array
    getUniqueGames(games, {});
  };

  // Nice code snippet to get unique items from an array of objects: https://stackoverflow.com/questions/43374112/filter-unique-values-from-an-array-of-objects/43374273
  // This function will return unique games by their Id. Its best to NOT show duplicates in DOM
  function getUniqueGames(games, userClickedGameAsWishList) {  // 2nd paramerter will keep track of the game that the user click on, default is empty
    const uniqueGames = [];
    
    games.forEach(function (game) {

      var index = uniqueGames.findIndex(x => x.id == game.id);

      if (index <= -1) {

        if(userClickedGameAsWishList.name && 
          userClickedGameAsWishList.name === game.name) { // if user clicked on this game then mark as isFavorite. Let's not show wishlist again
          game.isFavorite = true;
        }

        uniqueGames.push(game);
      }
    });
    setAllGames(uniqueGames); // Set all games, but only the unique ones
  }

  return (
    <div className='cards'>
      <h1> Check out games in store!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items-container">
            <CardItem getUniqueGames={getUniqueGames} displayGames={gameResults.concat(allGames)} />
          </ul>
        </div>
      </div>
    </div>
  )

}
export default Products

