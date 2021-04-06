import React from "react"
import CardItem from "./CardItem"

export default function UpcomingVideoGames() {
    

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
        
        
    ];




    return (

        <div className='cards'>
            <h1>Upcoming Realeases!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items-container col px-md-5 p-3">
                    <CardItem displayGames={videoGames}/>
                    </ul>

                </div>
            </div>
        </div>

    )
}