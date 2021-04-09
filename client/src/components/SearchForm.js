import React, { useState, useContext } from "react";
import CardItem from "./CardItem";
import SearchContext from "../utils/SearchContext";
//import { useHistory } from "react-router-dom";
import './SearchForm.css';
//import './pages/Products';
import './CardItem';

const SearchForm = (props) => {

  const [searchTerm, setSearchTerm] = useState("")
  const { gameResults, setGameResults } = useContext(SearchContext);

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([]);
    fetch(`https://rawg.io/api/games?search=${slug}`)
      .then(resp => resp.json())
      .then(({ results }) => {
        results === undefined ? alert('no games found') : setGameResults(results)
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