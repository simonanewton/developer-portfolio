import React, { Component } from "react";
import { Col } from "react-bootstrap";
import "./index.css";

class SkillSquare extends Component {
    render() {
        return (
            <Col className="m-3 py-3 d-inline-block square" onClick={() => this.props.update()}>
                <img src={require(`../../assets/images/${this.props.logo}.png`)} alt="Language Logo" className="image" />
            </Col>
        );
    }
}

export default SkillSquare;
