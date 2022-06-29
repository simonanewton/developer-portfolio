import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, faHouseChimney, faStreetView, faBookOpenReader, faLaptopCode, faFileLines, faEnvelope, faSquarePhoneFlip, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import NavBlock from "../NavBlock";
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
                        <NavBlock name="Home" icon={faHouseChimney} link="" />
                        <NavBlock name="About" icon={faStreetView} link="" />
                        <NavBlock name="Learn" icon={faBookOpenReader} link="" />
                        <NavBlock name="Portfolio" icon={faLaptopCode} link="" />
                        <NavBlock name="Resume" icon={faFileLines} link="" />
                        <NavBlock name="Contact" icon={faEnvelope} link="" />
                        <hr className="mt-0 mb-3 bg-white border border-white w-100" />
                        <NavBlock name="Phone" icon={faSquarePhoneFlip} link="tel:+17064613684" />
                        <NavBlock name="Email" icon={faSquareEnvelope} link="mailto:simonanewton@gmail.com" />
                        <NavBlock name="GitHub" icon={faGithubSquare} link="https://github.com/simonanewton" />
                        <NavBlock name="LinkedIn" icon={faLinkedin} link="https://www.linkedin.com/in/simonanewtondev/" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default SideNav;