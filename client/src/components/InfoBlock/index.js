import React, { Component } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import ProfileImg from "../../assets/images/profile-pic.jpg";
import "./index.css";

class InfoBlock extends Component {
    deobfuscateEmail = () => {
        let email = "";
        return email;
    }

    deobfuscatePhone = () => {
        let phone = "";
        return phone;
    }

    render() {
        return (
            <Card>
                <Card.Header className="px-4 py-4 d-flex justify-content-center align-items-center">
                    <Card.Title as={"h4"} className="m-0">About Me</Card.Title>
                    <FontAwesomeIcon icon={faStreetView} size="xl" className="ms-2" />
                </Card.Header>
                <Card.Body className="px-5 d-block d-md-flex align-items-center">
                    <div className="px-0 px-md-3 pb-3 pb-md-0 text-center" id="profile-img">
                        <img src={ProfileImg} alt="Simon kneeling with Bluebelle." className="mx-auto rounded" />
                    </div>
                    <div className="px-0 px-md-3">
                        <ListGroup className="mb-3">
                            <ListGroup.Item>
                                <span className="me-2 fw-bold">Name:</span>
                                <span>Simon Newton</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className="me-2 fw-bold">Location:</span>
                                <span>Atlanta, GA</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className="me-2 fw-bold">Title:</span>
                                <span>Full Stack Web Developer</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className="me-2 fw-bold">Education:</span>
                                <span>Georgia Tech Full Stack Web Development Certificate</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className="me-2 fw-bold">Experience:</span>
                                <span>2+ Years</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="py-2">
                                <span className="me-2 fw-bold">Introduction:</span>
                                <Card.Text className="lh-md d-inline">
                                    Full-stack web developer with over two years of experience and a 
                                    portfolio of well-designed, creative websites. Passionate and 
                                    enthusiastic about interesting solutions to clients' needs, and 
                                    eager to collaborate with others to create compelling and useful 
                                    web applications. This is my personal developer profile where you 
                                    can learn more about my background, technologies in my skill set, 
                                    personal projects I've created, and how to contact me.
                                </Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className="me-2 fw-bold">Contact Me:</span>
                                <div className="d-inline">
                                    <Button variant="outline-primary" className="me-2">Email</Button>
                                    <Button variant="outline-primary" className="me-2">Phone</Button>
                                    <Button variant="outline-primary" className="me-2">GitHub</Button>
                                    <Button variant="outline-primary" className="me-2">LinkedIn</Button>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default InfoBlock;
