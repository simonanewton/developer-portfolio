import React, { Component } from "react";
import { Col } from "react-bootstrap";
import "./index.css";

class SkillSquare extends Component {
    render() {
        return (
            <Col xs={6} md={4} lg={2} onClick={() => this.props.update()} className="p-2">
                <div className="px-2 py-3 border border-secondary rounded d-flex justify-content-center align-items-center h-100 square">
                    <img src={this.props.logo} alt="Language Logo" className="logo" />
                </div>
            </Col>
        );
    }
}

export default SkillSquare;
