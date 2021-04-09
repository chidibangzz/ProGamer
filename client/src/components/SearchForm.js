import React, { useState, useContext } from "react";
import SearchContext from "../utils/SearchContext";
import './SearchForm.css';
import './CardItem';

const SearchForm = (props) => {

  const [searchTerm, setSearchTerm] = useState("")
  const { favoriteGames, setUniqueGames } = useContext(SearchContext);

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    fetch(`https://rawg.io/api/games?search=${slug}`)
      .then(resp => resp.json())
      .then(({ results }) => {
        if (results === undefined) {
          return alert('no games found');
        }

        const filteredSearchGames = results.filter(function (game) {
          var index = favoriteGames.findIndex(x => x.id == game.id);
          if (index <= -1) {
            return game;
          }
        });

        console.log("search filter", filteredSearchGames)
        setUniqueGames(filteredSearchGames, {});
      })
    setSearchTerm("")
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          className="search"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className="form-control"
          placeholder="Search for Game"
          id="search"
        />
        <br />
        <button className="btn=" className="fas fa-search" onClick={onSubmit}></button>
      </div>
    </form>
  )
}

export default SearchForm;