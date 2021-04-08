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
      

    const videoGamess = [
        {
        id:1,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:2,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:3,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:4,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:5,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:6,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:7,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:8,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:9,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:10,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:11,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:12,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        
        
    ];

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

