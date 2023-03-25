import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";

export default function ProjectCard({ item }) {
  return (
    <Link to="/" className="link">
      <div className="projectCard">
        <img src={item.img} alt="" />
        <div className="info">
          <img src={item.img} alt="" />
          <div className="texts">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
