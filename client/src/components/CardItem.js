import { Link } from 'react-router-dom'
import React, {useContext} from 'react'
import './CardItem.css'
import './SearchForm'
import API from '../utils/API';
import SearchContext from '../utils/SearchContext';

function CardItem(props) {
  //deleted wishlist
  // const rows = [...Array( Math.ceil(props.displayGames.length / 4) )];
  // const productRows = rows.map( (row, idx) => props.displayGames.slice(idx * 4, idx * 4 + 4) );
  const { allGames, setUniqueGames } = useContext(SearchContext);

  function addToWishList(gameUserClickOn) {
    API.addGameToWishList(gameUserClickOn)
      .then(results => {
        setUniqueGames(allGames, gameUserClickOn);
      });
  }

  return (
    <>
      <li className="cards__item row">
        {allGames.map((game, index) => {
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
                  <i className="fas fa-plus" onClick={() => addToWishList(game)}> Add to Wishlist </i>
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

export default CardItem
