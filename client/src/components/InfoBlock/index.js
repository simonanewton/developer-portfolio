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
                <Card.Body className="px-5 d-block d-md-flex align-items-center">
                    <div className="px-0 px-md-3 pb-3 pb-md-0 text-center" id="profile-img">
                        <img src={ProfileImg} alt="Simon kneeling with Bluebelle." className="mx-auto rounded" />
                    </div>
                    <div className="px-0 px-md-3">
                        <Card.Text>
                            Hi, I'm Simon, a junior full-stack web developer with over a year of experience as a part-time 
                            contractor with a portfolio of well-designed, creative web applications. I am extremely passionate 
                            and enthusiastic about working in the web development industry, and I’m ready to collaborate with 
                            others to create compelling and useful web applications. This is my personal developer profile where 
                            you can learn more about my background, languages and technologies in my skillset, personal projects 
                            I've developed, and how to contact me.
                        </Card.Text>
                        <Card.Text className="mb-0">
                            I have been interested in different kinds of technology ever since I was young - the first video game 
                            I remember playing was the Ms. Pacman console at a friend’s house. Over the years, I have improved my 
                            skills with computers and other technologies, namely through academic pursuits and personal interests. 
                            I am an avid consumer of competitive FPS games like Apex Legends, Quake Champions, and Overwatch. This 
                            is what led to building my first pc several years ago, and since then I have significantly improved my 
                            skills at troubleshooting, network configuration, and operating system optimization.
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default InfoBlock;
