import React from "react";

const Card = ({ title, description, nome }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">{nome}</small></p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
