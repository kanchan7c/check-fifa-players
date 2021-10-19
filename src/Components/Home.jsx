import React from "react";
import fifa from "../Images/fifa19.png";
import bgImage from "../Images/background.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
    console.log(bgImage);
  return (
    <div>
      <div className="container">
        <div className="fifa-19">
          <img src={fifa} alt="FIFA19" />
        </div>
        <div className="searchContainer">
          <div className="searchBox">
          <input className="searchBar" type="search"  placeholder="Search players"/>
            <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" /> <a href="#">Search</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
