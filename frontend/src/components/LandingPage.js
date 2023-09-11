import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Construction Management System </h1>
        <p>Discover, Manage, and Collaborate on Projects</p>
        <a href="/projects" className="cta-button">Explore Projects</a>
      </header>
    </div>
  );
};

export default LandingPage;
