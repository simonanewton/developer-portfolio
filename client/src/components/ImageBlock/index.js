import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./index.css";

class ImageBlock extends Component {
    render() {
        return (
            <Card className="mx-3 w-50 card-main">
                <Card.Body className="p-0 d-flex justify-content-center">
                    <img
                        src={require("../../assets/images/profile.jpg")}
                        alt="Black and white photograph of Simon Newton kneeling with his dog Bluebelle."
                        id="profile-img" />
                </Card.Body>
            </Card>
        );
    }
}

export default ImageBlock;