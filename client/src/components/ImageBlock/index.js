import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./index.css";

class ImageBlock extends Component {
    render() {
        return (
            <Row className="justify-content-center">
                <Col lg={3}>
                    <img
                        src={require("../../assets/images/profile.jpg")}
                        alt="Simon kneeling with Bluebelle."
                        className="mx-auto rounded"
                        id="profile-img" />
                </Col>
                <Col lg={"auto"} className="my-auto">
                    <div className="text-white">
                        <h1>Simon Newton</h1>
                        <h1>Junior Full Stack Web Developer</h1>
                        <h3>Georgia Tech Web Development Certificate</h3>
                        <h3>1+ year Experience</h3>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default ImageBlock;
