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
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items-container">
                        {/* <CardItem displayGames={favoriteGames} /> */}
                        {/* ^^^^ the following seems to not show on page. I believe its due to CSS issue */}
                        {favoriteGames.map(game =>
                            <p key={game.key}>{game.name}</p>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </>

}
