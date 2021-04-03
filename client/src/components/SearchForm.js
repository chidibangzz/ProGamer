import React from "react";
import { useHistory } from "react-router-dom";
import './SearchForm.css'


function SearchForm(props) {
    let history = useHistory();

    function handleClick() {
      history.push("/products");
    }
  
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
        //   onChange={props.handleInputChange}
        //   value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for Game"
          id="search"
        />
        <br />
        <button  className="btn=" i className="fas fa-search" onClick={handleClick} >
     
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
