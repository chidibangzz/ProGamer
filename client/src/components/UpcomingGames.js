import React from "react"
import CardItem from "./CardItem"

export default function UpcomingVideoGames() {
    

    const videoGames = [
        {
        id:1,
        src:"images/god_of_war_ragnarok.jpeg",
        text:"God of War: Ragnarok",
        rating:"",
        releaseDate:"Realease Date: 2021",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:2,
        src:"images/balan_wonderland.jpeg",
        text:"Balan Wonderland",
        rating:"E10+",
        releaseDate:"Realease Date: 2021",
        ratingNumber:"3566",
        label:'Square Enix',
        path:'/products'
        },
        {
        id:3,
        src:"images/returnal.jpeg",
        text:"Returnal",
        rating:"",
        releaseDate:"Realease Date: 2021",
        ratingNumber:"3566",
        label:'Housemarque',
        path:'/products'
        },
        
        
    ];




    return (

        <div className='cards'>
            <h1>Upcoming Releases!</h1>
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