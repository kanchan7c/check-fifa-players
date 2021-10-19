import React, {useState} from 'react';
import JASON from "../data.json";
import { Link } from "react-router-dom";

const  Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
            <div className="content">
          <div className="search">
            <input
              type="text"
              className="search__input"
              aria-label="search"
              placeholder="Name, Club, Nationality, Weight in lbs"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <button className="search__submit" aria-label="submit search">
              <i className="bi bi-search"></i>Search
            </button>
          </div>
        </div>
        {JASON.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.Club.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.Nationality.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.Weight.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.Name.toLowerCase().includes(searchTerm.toLowerCase())
          ) 
            return val;
          
        }).map((val, key) => {
          return (
            <div className="resultContainer">
              <div className="searchResults" key="key">
                <div>
                  <Link to="/Player_Data" pathName="\Profile">
                    <span>{val.Name}</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        </div>
    )
}

export default Search;
