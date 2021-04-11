import React, { useContext, useEffect } from 'react'
import '../../App.css';
import API from '../../utils/API';
import SearchContext from '../../utils/SearchContext';
import CardItem from "../CardItem";


//wishlist game display
export default function Services() {

    const { favoriteGames, setFavoriteGames } = useContext(SearchContext);

    useEffect(() => {
        loadWishList();
    }, []);

    async function loadWishList() {
        let wishListGames = await API.getFavoriteGames(); // Get all favorite games and add extra property isFavorite. We will use in DOM, to show/hide wishlist
        wishListGames = wishListGames.data;
        wishListGames = wishListGames.map(game => {
            return {
                ...game,
                isFavorite: true
            }
        });
        console.log("favorite games from database", wishListGames);
        setFavoriteGames(wishListGames);
    }

    return <>
        <div className='cards'>
            <h1> Wishlist!</h1>
            <div className="cards__containers">
                <div className="cards__wrappers">
                    <ul className="cards__itemss">
                        
                        {/* <CardItem displayGames={favoriteGames} /> */}
                        {/* ^^^^ the following seems to not show on page. I believe its due to CSS issue. Quickfix is just include your html here */}
                        <li className="cards__items">
                        {favoriteGames.map(game =>
                            <div className="cards__item__link col-md-4 col-sm-12 mt-3 p-4" key={game.id}>
                            <figure className="cards__item__pic-wrap" data-category={game.label}>
                              <img src={game.background_image}
                                alt=""
                                className="cards__item__img"
                                images={game.background_image}
                              />
                            </figure>
                            <div className="cards__item__info">
                              <ul className="logo" className="fab fa-xbox">{game.logo}
                                <li className="logo" className="fab fa-playstation"></li>
                                <li className="logo" className="fab fa-windows"></li>
              
                              </ul>
                              <h5 className="cards__item__text">{game.name}</h5>
                              <h6 className="cards__item__text">{game.released}</h6>
              
                              <h6 className="cards__item__text">{game.releaseDate}
                                <i className="fas fa-star">{game.rating}</i>
                              </h6>
                              <h6 className="cards__item__text">{game.ratingNumber}
                              </h6>
                            </div>
                          </div>
                        )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>

}
