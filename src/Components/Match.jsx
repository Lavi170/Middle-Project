import "./Match.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const containerStyle = {
  width: "100%",
  height: "100%",
};

function Match({ value, setValue, currentTeam }) {
  let { currentdate } = useParams();
  console.log(currentdate);
  const [match, setMatch] = useState({})
  const [count, setCount] = useState(0)
// const [currentTeam,setCurrentTeam] = useState()
  useEffect(() => {
    const foundTeam = currentTeam?.homeGames?.find((obj) => obj?.date==currentdate);
    setMatch(foundTeam);
    console.log(match, "match");
  }, [count]);
  setCount(1)
  return (
    <div id="match-page">
      <div className="match-container">
        {match?.filter(item=>item.date==currentdate)?.map((game, index) => (
          <div key={index} className="match-item">
            <h2>{game.awayTeam}</h2>
            
          </div>
        ))}
        <h1>{`${currentTeam.team}`}</h1>
        <h1>{match.date}</h1>
      </div>
    </div>
  );
}
export default Match;
{
  /* <div id="match-header">
                <h1>Home team VS. Away team</h1>
            </div>
            <div id="match-big-grid">
                <div id="match-grid-left-side">
                    <div className="match-info" id="match-date">Date: yyyy-mm-dd</div>
                    <div className="match-info" id="match-stadium">Stadium: this stadium.</div>
                    <div className="match-info" id="match-seats">Seats available: Seats/random number</div>
                    <div className="match-info" id="match-teams">Home team:home team <br />
                        Away team: away team</div>
                    <div className="match-info" id="match-buttons">
                        <button className="match-buttons">To home team</button>
                        <button className="match-buttons">Buy tickets</button>
                    </div>
                    <div className="match-info" id="match-api">
                    </div>

                </div>
                <div id="match-grid-right-side">
                    left
                </div>
            </div> */
}
