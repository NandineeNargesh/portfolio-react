import React from 'react';
import './Card.css';

const Card = ({ title, subtitle, dates }) => {
  return (
    <div className="card glowing-card">
      <h4>{title}</h4>
      <p className="card-subtitle">{subtitle}</p>
      <p className="card-dates">{dates}</p>
    </div>
  );
};

export default Card;