import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css"; 

const Home = () => {
  return (
    <div className="home">
  <h1 className="home-title">Your Curated Universe</h1>
<p className="home-subtitle">Step into collections crafted with passion — food, fantasy, finance & fun!</p>

<div className="category-card">
  <Link to="/Meals">
    <h2>Flavors & Feasts</h2>
    <p>Master dishes and recipes the fun way.</p>
  </Link>
</div>
<div className="category-card">
  <Link to="/cocktails">
    <h2>Sip & Stir</h2>
    <p>Explore cocktail creations for chill nights.</p>
  </Link>
</div>
<div className="category-card">
  <Link to="/potter">
    <h2>Wizards Unite</h2>
    <p>Wander through the magical corridors of Hogwarts.</p>
  </Link>
</div>
<div className="category-card">
  <Link to="/banks">
    <h2>FinTrack</h2>
    <p>Smart insights into banking and beyond.</p>
  </Link>
</div>

      </div>
  );
};

export default Home;
