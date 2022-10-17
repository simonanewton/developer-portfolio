import React, { Component } from "react";
import "./index.css";

class TitleBlock extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="text-center text-white">
                    <h1>Simon Newton</h1>
                    <h3>Junior Full Stack Web Developer</h3>
                    <h3>Georgia Tech Web Development Certificate</h3>
                    <h3>1+ year Experience</h3>
                </div>
            </div>
        );
    }
}

export default TitleBlock;
