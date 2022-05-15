import React from "react";
export default function Card(props) {
  return (
    <div className="card">
      <img className="hero-img" src={props.img} alt="card-img"></img>
      <div>
        <div className="div-1">
          <img
            className="icon-location"
            src="../images/Fill 219.png"
            alt="icon-location"
          ></img>
          <h3 className="name-location"> {props.location}</h3>
          <a className="view-maps" href={props.link}>
            View on Google Maps
          </a>
        </div>
        <div>
          <h1> {props.title}</h1>
          <h3>
            {" "}
            {props.startDate} - {props.endDate}
          </h3>
          <p className="location-desc">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
