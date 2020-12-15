import '../style/home.css';
import React, { Component } from 'react';

function About( {image, title, info} ) {
    var img1 = require(`../images/${image}.png`)
  return (
    <div className="About">
        <div className="image">
            <div className="imgBorder">
                <img src={img1.default} className="aboutImg"/>
            </div>
            <div className="texts">
                <h1 className="aboutTitle">{title}</h1>
                <div className="line"></div>
                <p className="aboutInfo">{info}</p>
            </div>
        </div>
    </div>
  );
}

export default About;