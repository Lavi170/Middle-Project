import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TeamPage.css";
const TeamPage = ({ value }) => {
  let { teamname } = useParams();
  const [currentTeam, setcurrentTeam] = useState();
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
          style={{ height: "100%" }}
          alt=""
        />
      </div>
      <div className="team-page-container">
        <div className="team-page-main-pic">
          <img
            src={`../../${currentTeam.backroundPic}`}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="team-page-text-in-pic">{currentTeam.team}</div>
      </div>
    </div>
  );
};

export default TeamPage;
