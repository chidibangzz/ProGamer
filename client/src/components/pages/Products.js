import React, { useEffect, useState } from "react";

//import { render } from 'react-dom';
import { Link } from "react-router-dom";
import '../../App.css'
//import Cards from "../Cards"
import CardItem from "../CardItem"
import SearchForm from "../SearchForm"
import API from '../utils/API'
import axios from "axios";

// const { REACT_APP_API_KEY } = process.env;
const BASEURL = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`;

function Products() {
    const [videoGamesApi, setVideoGameApi] = useState([]);
    const [favoriteGames, setFavoriteGames] = useState([]);
    

    useEffect(() => {
        loadVideogames()
    // run once only on page load and if you wanted to run mutlitple times you can pass in param function in arra
      }, [])
      useEffect(() => {
        getFavorites()
        
    // run once only on page load and if you wanted to run mutlitple times you can pass in param function in arra
      }, [])


      

    function loadVideogames() {
       axios.get(BASEURL)
          .then(res => {
            setVideoGameApi(res.data.results)
            console.log(res.data.results)
          })
          .catch(err => console.log(err));
      };
    
      function getFavorites() {
      API.getFavoriteGames()
      .then(results => {
            setFavoriteGames(results.data)
          console.log("favorites")
          console.log(results.data)});

      }
      

    return (

        <div className='cards'> 
        
            <h1> Check out games in store!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items-container">
                    <CardItem favoriteGames={favoriteGames} displayGames={videoGamesApi}/>
                    </ul>

                </div>
            </div>
        </div>

    )

}
export default Products

