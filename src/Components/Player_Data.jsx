import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Player_Data = () => {
  const { Name } = useParams(); //pulling data from URL
  const [playerDetails, setPlayerDetails] = useState({});

  useEffect(() => {
    let url = "../data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const currentPlayer = data.find(player => player.Name == Name);
        setPlayerDetails(currentPlayer);
      });
  }, [Name]);

  return (
    <div className="container">
      <div className="player-details">
        <div>
          <div>
            <img src={playerDetails.Image} alt="player" />
          </div>
          <div>
            <span>Name:</span> <span>{playerDetails.Name}</span>
          </div>
          <div>
            <span>Age:</span> <span>{playerDetails.Age}</span>
          </div>
          <div>
            <span>Nationality:</span> <span>{playerDetails.Nationality}</span>
          </div>
          <div>
            <span>Overall:</span> <span>{playerDetails.Overall}</span>
          </div>
          <div>
            <span>Club:</span> <span>{playerDetails.Club}</span>
          </div>
          <div>
            <span>Value:</span> <span>{playerDetails.Value}</span>
          </div>
          <div>
            <span>Wage:</span> <span>{playerDetails.Wage}</span>
          </div>
          <div>
            <span>Preferred Foot:</span>{" "}
            <span>{playerDetails.Preferred_Foot}</span>
          </div>
          <div>
            <span>Work Rate:</span> <span>{playerDetails.Work_Rate}</span>
          </div>
          <div>
            <span>Position:</span> <span>{playerDetails.Position}</span>
          </div>
        </div>
        <div>
          <div>
            <span>Jersey Number:</span>{" "}
            <span>{playerDetails.Jersey_Number}</span>
          </div>
          <div>
            <span>Joined Date:</span> <span>{playerDetails.Joined}</span>
          </div>
          <div>
            <span>Contract Validity:</span>{" "}
            <span>{playerDetails.Contract_Valid_Until}</span>
          </div>
          <div>
            <span>Height:</span> <span>{playerDetails.Height}</span>
          </div>
          <div>
            <span>Weight:</span> <span>{playerDetails.Weight}</span>
          </div>
          <div>
            <span>Crossing:</span> <span>{playerDetails.Crossing}</span>
          </div>
          <div>
            <span>Finishing:</span> <span>{playerDetails.Finishing}</span>
          </div>
          <div>
            <span>Heading Accuracy:</span>{" "}
            <span>{playerDetails.HeadingAccuracy}</span>
          </div>
          <div>
            <span>Short Passing:</span>{" "}
            <span>{playerDetails.ShortPassing}</span>
          </div>
          <div>
            <span>Volleys:</span> <span>{playerDetails.Volleys}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player_Data;
