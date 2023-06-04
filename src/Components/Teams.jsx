import React from 'react'
import { Outlet, Link, useParams, useLocation } from "react-router-dom";

import "./Teams.css"
const Teams = ({ value, setValue }) => {
  return (
    <div className="big-product-page">
    {value.map((item, index) => (
      <div className="Product-card" key={index}>
        <div className="Product-card-img-one">
          <Link to={`${item.team}`}>   
            <img
              id="image-one-id"
              src={`../${item.logoPic}`}
              height="90%"
              alt=""
              />
          </Link>
        </div>
        <div className="Product-card-text-one">
          <h3>{item.team} </h3>
          <span>{`Playing in ${item.stadium} |`}</span>
          <span> {`${item.seats} Seats|`}</span>
          <span>{`Main formation: ${item.formation}`} </span>
          <br />
          <div> <a href="">Buy Tickets Now</a></div>
          <div className="App"></div>
        </div>
      </div>
    ))}</div>
  )}
export default Teams