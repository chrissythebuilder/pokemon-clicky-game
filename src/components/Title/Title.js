import React from "react";
import "./Title.css";

const Title = props => (
    <div className = "title-description">
        <h1 className="title">{props.title}</h1>
        <p className ="rules">{props.rules}</p>
    </div>
);


export default Title;