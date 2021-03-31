import { Link } from 'react-router-dom'
import React from 'react'
import './CardItem.css'

function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                {props.displayGames.map(games =>(
                   <Link className="cards__item__link" to={games.path} key={games.id}>
                   <figure className="cards__item__pic-wrap" data-category
                   ={games.label}
                   >
                       <img src={games.src} 
                       alt="Mario"
                       className="cards__item__img" 
                       images={games.src}
                       />
                   </figure>
                   <div className="cards__item__info">
                   <ul className= "logo" i className="fab fa-xbox">{games.logo}
                   <li className="logo" i className="fab fa-playstation"></li>
                   <li className="logo" i className="fab fa-windows"></li>
                   
                   </ul>
                   <h5 className="cards__item__text">{games.text}</h5>
                   
                   <h6 className="cards__item__text">{games.releaseDate}
                   <i className="fas fa-star">{games.rating}</i>
                   </h6>
                   <h6 className="cards__item__text">{games.ratingNumber}
                   <i className="fas fa-plus"></i>
                   </h6>

                   </div>
               </Link>
                    
                ))}
             
            </li>
        </>
    )

}

export default CardItem
