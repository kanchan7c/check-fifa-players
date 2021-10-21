import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const Lbs = (value) => {
  const lblRegex = /[0-9]+/;
  const weightMatch = lblRegex.exec(value);
  if (!weightMatch || weightMatch.length <= 0) return;

  const weight = Number(weightMatch.pop());
  return {
    value: weight,
    toKg: () => Math.round(weight / 2.09),
  };
};

const Feet = (value) => {
  if (!value) return;

  const [footString, inchesString] = value.split("'");
  const [foot, inches] = [Number(footString), Number(inchesString)];
  return {
    foot: foot,
    inches: inches,
    toCentimeter: () => foot * 30.48 + inches * 2.54,
  };
};

const Player_Data = () => {
  const { Name } = useParams(); //pulling data from URL
  const [playerDetails, setPlayerDetails] = useState(undefined);
  const [playerStats, setPlayerStats] = useState([]);

  useEffect(() => {
    let url = "../data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const currentPlayer = data.find((player) => player.Name === Name);
        setPlayerDetails(currentPlayer);
      });
  }, [Name]);

  useEffect(() => {
    if (!playerDetails) return;
    const stats = [
      { name: "Crossing", x: playerDetails.Crossing },
      { name: "Finishing", x: playerDetails.Finishing },
      { name: "Heading Accuracy", x: playerDetails.HeadingAccuracy },
      { name: "Short Passing", x: playerDetails.ShortPassing },
      { name: "Volleys", x: playerDetails.Volleys },
    ];
    setPlayerStats(stats);
  }, [playerDetails]);

  return (
    <div className="player-details_container">
      <div className="navBar">
        <Link to="/" className="nav">
          <i class="bi bi-arrow-left-short"></i> Home{" "}
        </Link>
        <Link to="#" className="nav">
          <i class="bi bi-question"></i> Help
        </Link>
      </div>
      {playerDetails && playerDetails.Name ? (
        <>
          <div className="player_name_image">
            <span className="player-name">{playerDetails.Name}</span>
            <div className="player-image">
              <img src={playerDetails.Image} alt="player" />
            </div>
          </div>
          <div className="player-profile">
            <div className="radar-chart-container">
              <div className="radar-chart">
                <RadarChart
                  height={500}
                  width={500}
                  outerRadius="80%"
                  data={playerStats}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis />
                  <Radar
                    dataKey="x"
                    stroke="#E6E6E6"
                    fill="#F9C4D8"
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </div>
            </div>
            <div className="player-details">
              <ul>
                <li className="player_highlights-all">
                  <span className="player_highlights">
                    Overall <strong>{playerDetails.Overall}</strong>
                  </span>
                  <span className="player_highlights">
                    Jersey Number <strong>{playerDetails.Jersey_Number}</strong>
                  </span>
                </li>
                <li>
                  <span>Age: </span>
                  <span className="player-detail_value">
                    {playerDetails.Age}
                  </span>
                </li>
                <li>
                  <span>Nationality: </span>
                  <span className="player-detail_value">
                    {playerDetails.Nationality}
                  </span>
                </li>
                <li>
                  <span>Club: </span>
                  <span className="player-detail_value">
                    {playerDetails.Club}
                  </span>
                </li>
                <li>
                  <span>Value: </span>
                  <span className="player-detail_value">
                    {playerDetails.Value}
                  </span>
                </li>
                <li>
                  <span>Wage: </span>
                  <span className="player-detail_value">
                    {playerDetails.Wage}
                  </span>
                </li>
                <li>
                  <span>Preferred Foot: </span>
                  <span className="player-detail_value">
                    {playerDetails.Preferred_Foot}
                  </span>
                </li>
                <li>
                  <span>Work Rate: </span>
                  <span className="player-detail_value">
                    {playerDetails.Work_Rate}
                  </span>
                </li>
                <li>
                  <span>Position: </span>
                  <span className="player-detail_value">
                    {playerDetails.Position}
                  </span>
                </li>
                <li>
                  <span>Joined Date: </span>
                  <span className="player-detail_value">
                    {playerDetails.Joined}
                  </span>
                </li>
                <li>
                  <span>Height: </span>
                  <span className="player-detail_value">
                    {playerDetails.Height} - {Feet(playerDetails.Height).toCentimeter()}cm
                  </span>
                </li>
                <li>
                  <span>Weight: </span>
                  <span className="player-detail_value">
                    {playerDetails.Weight} - {Lbs(playerDetails.Weight).toKg()}
                    kg
                  </span>
                </li>
                <li>
                  <span>Contract Validity: </span>
                  <span className="player-detail_value">
                    {playerDetails.Contract_Valid_Until}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Player_Data;
