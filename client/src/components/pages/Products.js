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
  const {setFavoriteGames, setUniqueGames } = useContext(SearchContext);

  useEffect(() => {
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
    setFavoriteGames(favoriteGames);

    const games = favoriteGames.concat(videoGamesApi); // Load favorite and API games into 1 single array
    setUniqueGames(games, {});
  };

  return (
    <div className='cards'>
      <h1> Check out games in store!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items-container">
            <CardItem />
          </ul>
        </div>
      </div>
    </div>
  )

}
export default Products

