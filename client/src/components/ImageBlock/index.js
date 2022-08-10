import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./index.css";

class ImageBlock extends Component {
    render() {
        return (
            <Card className="h-100">
                <Card.Img
                    src={require("../../assets/images/profile.jpg")}
                    alt="Simon kneeling with Bluebelle."
                    className="mx-auto rounded-0"
                    id="profile-img" />
            </Card>
        );
    }
}

export default ImageBlock;