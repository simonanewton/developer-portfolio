import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import ProfileImg from "../../assets/images/profile-pic.jpg";
import "./index.css";

class InfoBlock extends Component {
    render() {
        return (
            <Card>
                <Card.Header className="px-4 py-4 d-flex justify-content-center align-items-center">
                    <Card.Title as={"h4"} className="m-0">About Me</Card.Title>
                    <FontAwesomeIcon icon={faStreetView} size="xl" className="ms-2" />
                </Card.Header>
                <Card.Body className="d-block d-md-flex align-items-center">
                    <div className="px-0 px-md-3 pb-3 pb-md-0 text-center" id="profile-img">
                        <img src={ProfileImg} alt="Simon kneeling with Bluebelle." className="mx-auto rounded" />
                    </div>
                    <div className="px-0 px-md-2">
                        <Card.Text>
                            Hi! I’m Simon and this is my personal website where you can find information and
                            links to my personal projects that I’ve worked on, my resume for viewing my professional
                            history, and a place to contact me if you would like to get in touch. I am a Full Stack Web
                            Developer with ambitions of furthering my career and expanding my network with fellow industry
                            professionals. I am extremely passionate and enthusiastic about working in the web development
                            industry and I’m ready to work with others to create compelling and useful web applications.
                        </Card.Text>
                        <Card.Text className="mb-0">
                            I have been interested in different kinds of technology ever since I was young - the first video
                            game I ever remember playing was the Ms. Pacman console at my friend’s house and I was immediately
                            entranced. Over the years I have improved my skills with computers and other technologies, namely
                            through my academic pursuits and personal interests. I am an avid consumer of competitive FPS games
                            like Apex Legends, Quake Champions, Diabotical, and Valorant. This is what led me to build my first
                            computer several years ago and since then I have significantly improved my talent at troubleshooting,
                            network configuration, and operating system optimization.
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default InfoBlock;
