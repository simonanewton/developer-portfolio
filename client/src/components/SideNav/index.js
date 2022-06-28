import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, faHouseChimney, faStreetView, faBookOpenReader, faLaptopCode, faFileLines, faEnvelope, faSquarePhoneFlip, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class SideNav extends Component {
    render() {
        return (
            <Navbar expand="lg" className="p-4 flex-column" style={{ backgroundColor: "#434A54" }}>
                <Navbar.Brand href="/" className="py-3 mx-0 mb-4 d-flex justify-content-center w-100">
                    <FontAwesomeIcon icon={faCode} size="xl" className="text-white" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="flex-column align-items-start">
                    <Nav defaultActiveKey="/" className="flex-column align-items-start w-100">
                        <Nav.Item className="px-3 mb-3 border border-white rounded w-100 nav-button">
                            <Nav.Link href="#" className="px-0 py-3 text-white d-flex justify-content-between align-items-center w-100">
                                <span>Home</span>
                                <FontAwesomeIcon icon={faHouseChimney} size="lg" className="ml-3" style={{ minWidth: "25px" }} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="px-3 mb-3 border border-white rounded w-100 nav-button">
                            <Nav.Link href="#" className="px-0 py-3 text-white d-flex justify-content-between align-items-center w-100">
                                <span>About</span>
                                <FontAwesomeIcon icon={faStreetView} size="lg" className="ml-3" style={{ minWidth: "25px" }} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="px-3 mb-3 border border-white rounded w-100 nav-button">
                            <Nav.Link href="#" className="px-0 py-3 text-white d-flex justify-content-between align-items-center w-100">
                                <span>Learn</span>
                                <FontAwesomeIcon icon={faBookOpenReader} size="lg" className="ml-3" style={{ minWidth: "25px" }} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="px-3 mb-3 border border-white rounded w-100 nav-button">
                            <Nav.Link href="#" className="px-0 py-3 text-white d-flex justify-content-between align-items-center w-100">
                                <span>Portfolio</span>
                                <FontAwesomeIcon icon={faLaptopCode} size="lg" className="ml-3" style={{ minWidth: "25px" }} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="px-3 mb-3 border border-white rounded w-100 nav-button">
                            <Nav.Link href="#" className="px-0 py-3 text-white d-flex justify-content-between align-items-center w-100">
                                <span>Resume</span>
                                <FontAwesomeIcon icon={faFileLines} size="lg" className="ml-3" style={{ minWidth: "25px" }} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="px-3 mb-3 border border-white rounded w-100 nav-button">
                            <Nav.Link href="#" className="px-0 py-3 text-white d-flex justify-content-between align-items-center w-100">
                                <span>Contact</span>
                                <FontAwesomeIcon icon={faEnvelope} size="lg" className="ml-3" style={{ minWidth: "25px" }} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="px-3 mb-3 border border-white rounded w-100 nav-button">
                            <Nav.Link href="tel:+17064613684" className="px-0 py-3 text-white d-flex justify-content-between align-items-center w-100">
                                <span>Phone</span>
                                <FontAwesomeIcon icon={faSquarePhoneFlip} size="lg" className="ml-3" style={{ minWidth: "25px" }} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="px-3 mb-3 border border-white rounded w-100 nav-button">
                            <Nav.Link href="mailto:simonanewton@gmail.com" className="px-0 py-3 text-white d-flex justify-content-between align-items-center w-100" target={"_blank"}>
                                <span>Email</span>
                                <FontAwesomeIcon icon={faSquareEnvelope} size="lg" className="ml-3" style={{ minWidth: "25px" }} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="px-3 mb-3 border border-white rounded w-100 nav-button">
                            <Nav.Link href="https://github.com/simonanewton" className="px-0 py-3 text-white d-flex justify-content-between align-items-cente w-100" target={"_blank"}>
                                <span>GitHub</span>
                                <FontAwesomeIcon icon={faGithubSquare} size="lg" className="ml-3" style={{ minWidth: "25px" }} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="px-3 mb-3 border border-white rounded w-100 nav-button">
                            <Nav.Link href="https://www.linkedin.com/in/simonanewtondev/" className="px-0 py-3 py-3 text-white d-flex justify-content-between align-items-center w-100" target={"_blank"}>
                                <span>LinkedIn</span>
                                <FontAwesomeIcon icon={faLinkedin} size="lg" className="ml-3" style={{ minWidth: "25px" }} />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default SideNav;