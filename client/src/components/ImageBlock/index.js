import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./index.css";

class ImageBlock extends Component {
    render() {
        return (
            <Card className="mx-3 w-50 card-main">
                <div className="p-0 h-100 d-flex justify-content-center">
                    <img
                        src={require("../../assets/images/profile.jpg")}
                        alt="Black and white photograph of Simon Newton kneeling with his dog Bluebelle."
                        id="profile-img" />
                </div>
            </Card>
        );
    }
}

export default ImageBlock;