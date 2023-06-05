import "./Match.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function Match({ value, currentTeam }) {
  let { currentdate } = useParams();
  const [match, setMatch] = useState(
    JSON.parse(localStorage.getItem("currentMatch")) || {}
  );
  console.log(currentTeam.striker);
  useEffect(() => {
    if (!localStorage.getItem("currentMatch")) {
      const currentGame = currentTeam.homeGames.find(
        (game) => game.date === currentdate
      );
      setMatch(currentGame);
      localStorage.setItem("currentMatch", JSON.stringify(currentGame));
    }
    return () => {
      localStorage.removeItem("currentMatch");
    };
  }, []);
  const away = value?.find((item) => item.team === match.awayTeam);
console.log(away);
//   console.log(away.striker);
  return (
    <div style={{ backgroundImage: `url(../../${currentTeam.backroundPic})` }}>
      <div className="header">
        <h1>
          {match.homeTeam} vs {match.awayTeam}
        </h1>
      </div>
      <br />
      <br />
      <div>
      <div className="content">
        <div className="venue">
          <h2 className="date-headline">On The {match.date}</h2>
        </div>
        <br />
        <br />
        <div className="buttons">
          <Link to="/payment" className="buy-tickets-button">
            Buy Tickets Now
          </Link>
          <Link to="/" className="go-back-button">
            Home
          </Link>
        </div>
      </div>

      <div className="lineups">
        <div className="team-lineup">
          <h3>{`${currentTeam.team} Lineup:`}</h3>
          <h4>{`formation: ${currentTeam.formation}`}</h4>
          <ul>
            <li>{`striker: ${currentTeam.striker}`}</li>
            <li>{`lw: ${currentTeam.lw}`}</li>
            <li>{`rw: ${currentTeam.rw}`}</li>
            <li>{`cam: ${currentTeam.cam}`}</li>
            <li>{`cm: ${currentTeam.cm}`}</li>
            <li>{`cdm: ${currentTeam.cdm}`}</li>
            <li>{`lb: ${currentTeam.lb}`}</li>
            <li>{`cb: ${currentTeam.cb1}`}</li>
            <li>{`cb: ${currentTeam.cb2}`}</li>
            <li>{`rb: ${currentTeam.rb}`}</li>
          </ul>
        </div>
        <div className="team-lineup">
        <h3>{`${away?.team} Lineup:`}</h3>
          <h4>{`formation: ${away?.formation}`}</h4>
          <ul>
            <li>{`striker: ${away?.striker}`}</li>
            <li>{`lw: ${away?.lw}`}</li>
            <li>{`rw: ${away?.rw}`}</li>
            <li>{`cam: ${away?.cam}`}</li>
            <li>{`cm: ${away?.cm}`}</li>
            <li>{`cdm: ${away?.cdm}`}</li>
            <li>{`lb: ${away?.lb}`}</li>
            <li>{`cb: ${away?.cb1}`}</li>
            <li>{`cb: ${away?.cb2}`}</li>
            <li>{`rb: ${away?.rb}`}</li>
          </ul>
        </div>
      </div>
    </div></div>
  );
}
export default Match;
