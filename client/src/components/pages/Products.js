import React from 'react'
// import '../../App.css'
// import Cards from "../Cards"
import CardItem from "../CardItem"


export default function Products() {
    

    const videoGames = [
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
            <h1>Look what games we have in store!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items-container" >
                    <CardItem displayGames={videoGames}/>
                    </ul>

                </div>
            </div>
        </div>

    )
}