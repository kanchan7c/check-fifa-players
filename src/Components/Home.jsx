import React from "react";
import fifaImage from "../Images/fifa19.png";
import Search from "./Search";


const Home = () => {
  
  return (
    <>
      <div className="container">
        <img className="fifa-image" src={fifaImage} alt="fifa19" />
        <Search />
      </div>
    </>
  );
};

export default Home;
