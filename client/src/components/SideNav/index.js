import React, { Component } from "react";
import { Offcanvas, Button, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faCode, faHouseChimney, faStreetView, faBookOpenReader, faLaptopCode, faFileLines, faEnvelope, faSquarePhoneFlip, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import NavBlock from "../NavBlock";
import "./index.css";

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
    }

    toggleCanvas = () => {
        this.setState({ display: !this.state.display });
    }

    renderToggleButton = () => {
        return (
            <div className="position-absolute menu-toggle">
                <Button onClick={this.toggleCanvas} className="p-3 text-white border border-white rounded menu-button">
                    <FontAwesomeIcon icon={faBars} size="lg"/>
                </Button>
            </div>
        );
    }

    renderCanvas = () => {
        return (
            <Offcanvas show={this.state.display} onHide={this.toggleCanvas} scroll="true" >
                <Offcanvas.Header closeButton closeVariant="white" style={{ backgroundColor: "#434A54" }} className="" />
                <Navbar expand="lg" className="p-0 flex-column justify-content-center vh-100" style={{ backgroundColor: "#434A54" }}>
                    <Navbar.Brand href="/" className="pb-4 me-0">
                        <FontAwesomeIcon icon={faCode} size="xl" className="text-white" />
                    </Navbar.Brand>
                    <Nav defaultActiveKey="/" className="pt-4 flex-column">
                        <NavBlock name="Home" icon={faHouseChimney} link="" />
                        <NavBlock name="About" icon={faStreetView} link="" />
                        <NavBlock name="Learn" icon={faBookOpenReader} link="" />
                        <NavBlock name="Portfolio" icon={faLaptopCode} link="" />
                        <NavBlock name="Resume" icon={faFileLines} link="" />
                        <NavBlock name="Contact" icon={faEnvelope} link="" />
                        <NavBlock name="Phone" icon={faSquarePhoneFlip} link="tel:+17064613684" />
                        <NavBlock name="Email" icon={faSquareEnvelope} link="mailto:simonanewton@gmail.com" />
                        <NavBlock name="GitHub" icon={faGithubSquare} link="https://github.com/simonanewton" />
                        <NavBlock name="LinkedIn" icon={faLinkedin} link="https://www.linkedin.com/in/simonanewtondev/" />
                    </Nav>
                </Navbar>
            </Offcanvas>
        );
    }

    render() {
        return (
            <div>
                {this.renderToggleButton()}
                {this.renderCanvas()}
            </div>
        );
    }
}

export default SideNav;