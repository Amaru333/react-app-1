import '../style/home.css';
import React, { Component } from 'react';

function SButton(props) {
    return (
        <div className="SButton">
            <button className="Skill">{props.value}</button>
        </div>
    )
}

export default SButton;