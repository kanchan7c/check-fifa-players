import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      let url = "../data.json";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setAllPlayers(data);
        });
    }
  }, [searchTerm]);
  const updateSearchText = (e) => {
    setSearchTerm(e.target.value);
  };

  const Clear = (e) => {
    setSearchTerm("");
  };

  return (
    <div>
      <div className="content">
        <div className="search">
          <input
            type="text"
            className="search__input"
            aria-label="search"
            placeholder="Name, Club, Nationality, Weight in lbs"
            value={searchTerm}
            onChange={updateSearchText}
          />
          {searchTerm ? (
            <button
              className="search__submit"
              aria-label="submit search"
              onClick={Clear}
            >
              <i class="bi bi-x" />
            </button>
          ) : (
            <button className="search__submit" aria-label="submit search">
              <i className="bi bi-search" />
              Search
            </button>
          )}
        </div>
      </div>
      {allPlayers
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.Club.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.Nationality.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.Weight.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.Name.toLowerCase().includes(searchTerm.toLowerCase())
          )
            return val;
        })
        .map((val) => {
          return (
            <div className="resultContainer">
              <div className="searchResults">
                <div>
                  <Link to={`/Player_Data/${val.Name}`}>
                    <span>{val.Name}</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Search;
