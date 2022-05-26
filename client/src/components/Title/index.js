import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./index.css";

class Title extends Component {
    render() {
        return (
            <Card className="mx-3 p-4 text-center main">
                <Card.Title className="m-0">{this.props.text}</Card.Title>
            </Card>
        );
    }
}

export default Title;