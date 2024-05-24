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
                                <span>Junior Full Stack Web Developer</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className="me-2 fw-bold">Education:</span>
                                <span>Georgia Tech Full Stack Web Development Certificate</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className="me-2 fw-bold">Experience:</span>
                                <span>2+ Years Web Development Contractor</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="py-2">
                                <span className="me-2 fw-bold">Introduction:</span>
                                <Card.Text className="lh-lg d-inline">
                                    Junior full-stack web developer with over a year of experience as a web developer contractor with a
                                    portfolio of well-designed, creative websites. Extremely passionate and enthusiastic about working in 
                                    the web development industry, and ready to collaborate with others to create compelling and useful web 
                                    applications. This is my personal developer profile where you can learn more about my background, 
                                    languages and technologies a part of my skillset, personal projects I've worked on, and how to contact me.
                                </Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className="me-2 fw-bold">Background:</span>
                                <Card.Text className="lh-lg d-inline">
                                    I have been interested in different kinds of technology ever since I was young; the first video game
                                    I remember playing was the Ms. Pacman console on a CRT TV! Over time I have improved my proficiency
                                    with computers and other technologies, primarily through academic studies and personal interests. I am an
                                    avid consumer of competitive FPS games like Apex Legends, Quake Champions, and Overwatch 2. This is what
                                    led to building my first PC several years ago, and since then I have significantly improved my skills with
                                    troubleshooting, network analysis, and operating system configuration.
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
