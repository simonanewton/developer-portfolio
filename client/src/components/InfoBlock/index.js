import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./index.css";

class InfoBlock extends Component {
    render() {
        return (
            <Card className="mx-3 w-50 main">
                <Card.Header className="px-5 py-4">
                    <Card.Title className="m-0">About Me</Card.Title>
                </Card.Header>
                <Card.Body className="px-5 py-4">
                    <Card.Text>
                        Hi! I’m Simon and this is my personal website where you can find information and
                        links to my personal projects that I’ve worked on, my resume for viewing my professional
                        history, and a place to contact me if you would like to get in touch. I am a Full Stack Web
                        Developer with ambitions of furthering my career and expanding my network with fellow industry
                        professionals. I am extremely passionate and enthusiastic about working in the web development
                        industry and I’m ready to work with others to create compelling and useful web applications.
                    </Card.Text>
                    <Card.Text>
                        I have been interested in different kinds of technology ever since I was young - the first video
                        game I ever remember playing was the Ms. Pacman console at my friend’s house and I was immediately
                        entranced. Over the years I have improved my skills with computers and other technologies, namely
                        through my academic pursuits and personal interests. I am an avid consumer of competitive FPS games
                        like Apex Legends, Quake Champions, Diabotical, and Valorant. This is what led me to build my first
                        computer several years ago and since then I have significantly improved my talent at troubleshooting,
                        network configuration, and operating system optimization.
                    </Card.Text>
                    <Card.Text>
                        When I started at Hamilton College in 2017,
                        I took my first programming class in Python and I immediately knew I wanted to switch my major to
                        Computer Science and program for the rest of my life.
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default InfoBlock;