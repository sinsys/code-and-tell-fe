// View - Playground page
// Core imports
import React from 'react';

// Component imports
// import { Link } from 'react-router-dom';

// Files / Assets
import './Playground.scss';

const Playground = () => {

  /************* Playing with colors *************/ 
  const shades = ["white", "offWhite", "gainsboro", "lightgray", "silver", "darkgray", "gray", "dimgray", "lightslategray", "slategray", "offBlack", "black"];
  const colors = ["primary", "primaryDark", "secondary", "secondaryDark", "callout", "soft", "vibrant"];

  const ColorDisplay = () => {
    const renderShades = () => {
      const $shades = shades.map(shade => {
        return (
          <div className={shade} key={shade}>{shade}</div>
        );
      });
      return $shades;
    };
  
    const renderColors = () => {
      const $colors = colors.map(color => {
        return (
          <div className={color} key={color}>{color}</div>
        );
      });
      return $colors;
    };

    return (
      <div className="ColorDisplay">
        <div className="shades">
          {renderShades()}
        </div>
        <div className="colors">
          {renderColors()}
        </div>
      </div>
    );
  }
  /************* Playing with colors *************/ 



  /************* Playing with a Hero component *************/ 
  const Hero = () => {
    return (
      <div className="Hero">
        <h1>I'm a hero!</h1>
      </div>
    )
  }
  /************* Playing with a Hero component *************/ 

  return (
    <div className="Playground">
      <h1>
        Playground
      </h1>
      <p>
        This is a playground designed to be an empty canvas for anything you want to experiment with. It will not be part of our production app.
      </p>

      <ColorDisplay />
      <Hero />
    </div>
  );
};

export default Playground;