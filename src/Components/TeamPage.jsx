import React, { useEffect, useState } from "react";
import "./TeamPage.css";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";

const TeamPage = ({ value, setcurrentTeam, currentTeam }) => {
  let { teamname } = useParams();
  useEffect(() => {
    const foundTeam = value?.find((obj) => obj?.team === teamname);
    setcurrentTeam(foundTeam);
  }, [value]);

  if (!currentTeam) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        className="team-page-headline"
        style={{ backgroundColor: currentTeam.maincolor }}
      >
        <img
          src={`../../${currentTeam.logoPic}`}
          style={{ height: "100%", position: "absolute", top: "20%" }}
          alt=""
        />
      </div>
      <div className="team-page-container">
        <div className="team-page-main-pic">
          <img
            src={`../../${currentTeam.backroundPic}`}
            alt=""
            className="main-picture"
          />
          <div className="team-page-text-in-pic">{currentTeam.team}</div>
        </div>
        <div className="team-discription">{currentTeam.discription}</div>
        <h2 className="team-page-text-in-pic2">Upcoming games:</h2>
        <div className="upcoming-games-block">
          {currentTeam.homeGames.map((game, index) => (
            <div
              key={index}
              className="game-item"
              style={{ backgroundColor: currentTeam.maincolor }}
            >
              <Link to={game.date}>
                {" "}
                <div className="game-info">{` ${game.homeTeam} VS ${game.awayTeam} at ${game.date}`}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
