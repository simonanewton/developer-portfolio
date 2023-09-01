import React, { Component } from "react";
import "./index.css";

class TitleBlock extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="text-center text-white text-shadow">
                    <h1>Simon Newton</h1>
                    <h4>Junior Full Stack Web Developer</h4>
                </div>
            </div>
        );
    }
}

export default TitleBlock;
