import '../style/home.css';
import React, { Component } from 'react';

function SButton(props) {
    return (
        <div className="SButton">
            <a href={props.url}><button className="Skill">{props.value}</button></a>
        </div>
    )
}

export default SButton;