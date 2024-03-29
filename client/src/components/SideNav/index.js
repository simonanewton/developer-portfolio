import React, { Component } from "react";
import { Offcanvas, Button, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faCode, faHouseChimney, faStreetView, faBookOpenReader, faLaptopCode, faFileLines, faEnvelope, faSquarePhoneFlip, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import NavButton from "../NavButton";
import "./index.css";

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
    }

    toggleOffcanvas = () => {
        this.setState({ display: !this.state.display });
    }

    renderDesktopToggleButton = () => {
        return (
            <div className="position-absolute menu-toggle">
                <Button onClick={this.toggleOffcanvas} className="text-white border-white menu-button">
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </Button>
            </div>
        );
    }

    renderMobileOffcanvas = () => {
        return (
            <Offcanvas show={this.state.display} onHide={this.toggleOffcanvas} scroll="true" placement="top" className="mobile-offcanvas" >
                <Offcanvas.Header closeButton closeVariant="white" style={{ backgroundColor: "#434A54" }} />
                <Navbar className="pt-0 pb-3 flex-column justify-content-center" style={{ backgroundColor: "#434A54" }}>
                    <Nav defaultActiveKey="/" className="flex-column">
                        <NavButton name="Home" icon={faHouseChimney} link="" />
                        <NavButton name="About" icon={faStreetView} link="" />
                        <NavButton name="Learn" icon={faBookOpenReader} link="" />
                        <NavButton name="Portfolio" icon={faLaptopCode} link="" />
                        <NavButton name="Resume" icon={faFileLines} link="" />
                        <NavButton name="Contact" icon={faEnvelope} link="" />
                        <hr className="mt-0 mb-3 border-white" />
                        <NavButton name="Phone" icon={faSquarePhoneFlip} link="tel:+17064613684" />
                        <NavButton name="Email" icon={faSquareEnvelope} link="mailto:simonanewton@gmail.com" />
                        <NavButton name="GitHub" icon={faGithubSquare} link="https://github.com/simonanewton" />
                        <NavButton name="LinkedIn" icon={faLinkedin} link="https://www.linkedin.com/in/simonanewtondev/" />
                    </Nav>
                </Navbar>
            </Offcanvas>
        );
    }

    renderDesktopOffcanvas = () => {
        return (
            <Offcanvas show={this.state.display} onHide={this.toggleOffcanvas} scroll="true" placement="start" className="border-0 desktop-offcanvas" >
                <Offcanvas.Header closeButton closeVariant="white" style={{ backgroundColor: "#434A54" }} />
                <Navbar className="p-0 flex-column vh-100" style={{ backgroundColor: "#434A54" }}>
                    <Navbar.Brand href="/" className="me-0">
                        <FontAwesomeIcon icon={faCode} size="xl" className="text-white" />
                    </Navbar.Brand>
                    <Nav defaultActiveKey="/" className="pt-4 flex-column">
                        <NavButton name="Home" icon={faHouseChimney} link="" />
                        <NavButton name="About" icon={faStreetView} link="" />
                        <NavButton name="Learn" icon={faBookOpenReader} link="" />
                        <NavButton name="Portfolio" icon={faLaptopCode} link="" />
                        <NavButton name="Resume" icon={faFileLines} link="" />
                        <NavButton name="Contact" icon={faEnvelope} link="" />
                        <hr className="mt-0 mb-3 border-white" />
                        <NavButton name="Phone" icon={faSquarePhoneFlip} link="tel:+17064613684" />
                        <NavButton name="Email" icon={faSquareEnvelope} link="mailto:simonanewton@gmail.com" />
                        <NavButton name="GitHub" icon={faGithubSquare} link="https://github.com/simonanewton" />
                        <NavButton name="LinkedIn" icon={faLinkedin} link="https://www.linkedin.com/in/simonanewtondev/" />
                    </Nav>
                </Navbar>
            </Offcanvas>
        );
    }

    render() {
        return (
            <div>
                {this.renderDesktopToggleButton()}
                {this.renderDesktopOffcanvas()}
                {this.renderMobileOffcanvas()}
            </div>
        );
    }
}

export default SideNav;
