import { Link } from 'react-router-dom'
import React, {useContext} from 'react'
import './ServiceCard.css'
import './SearchForm'
import API from '../utils/API';
import SearchContext from '../utils/SearchContext';


function ServicesCard(props) {

    const {favoriteGames, setFavoriteGames } = useContext(SearchContext);

    function loadWishList(wishlist) {
        API.getFavoriteGames(wishlist) // Get all favorite games and add extra property isFavorite. We will use in DOM, to show/hide wishlist
        .then(results => {
            setFavoriteGames(favoriteGames, wishlist) 
        });
    }
       
return (
    <>
      <li className="cards__item row">
        {favoriteGames.map((game, index) => {
          {return !game.isFavorite && <div className="cards__item__link col-md-4 col-sm-12 mt-3 p-4" key={game.id}>
              <figure className="cards__item__pic-wrap" data-category={game.label}>
                <img src={game.background_image}
                  alt=""
                  className="cards__item__img"
                  images={game.background_image}
                />
              </figure>
              <div className="cards__item__info">
                {/* <Linak to={game.path} > */}
                <ul className="logo" className="fab fa-xbox">{game.logo}
                  <li className="logo" className="fab fa-playstation"></li>
                  <li className="logo" className="fab fa-windows"></li>

                </ul>
                <h5 className="cards__item__text">{game.name}</h5>
                <h6 className="cards__item__text">{game.released}</h6>

                {/* {JSON.stringify(games)} */}
                <h6 className="cards__item__text">{game.releaseDate}
                  <i className="fas fa-star">{game.rating}</i>
                </h6>
                <h6 className="cards__item__text">{game.ratingNumber}
                  <i className="fas fa-plus" onClick={() => loadWishList(game)}> Add to Wishlist </i>
                </h6>
                {/* </Link> */}
              </div>
            </div>
          }
        })}
      </li>
    </>
  )
}
  export default ServicesCard