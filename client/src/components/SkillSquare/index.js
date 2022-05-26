import React, { Component } from "react";
import "./index.css";

class SkillSquare extends Component {
    render() {
        return (
            <div className="mx-3 p-3 d-inline-block square">
                <img src={require(`../../assets/images/${this.props.logo}.png`)} alt="Language Logo" className="image" />
            </div>
        );
    }
}

export default SkillSquare;