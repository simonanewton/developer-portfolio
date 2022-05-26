import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./index.css";

class SideNav extends Component {
    render() {
        return (
            <Navbar className="p-4 flex-column side-nav">
                <hr />
                <Nav className="flex-column text-center">
                    <Navbar.Text className="py-3">Home</Navbar.Text>
                    <Navbar.Text className="py-3">About</Navbar.Text>
                    <Navbar.Text className="py-3">Learn</Navbar.Text>
                    <Navbar.Text className="py-3">Portfolio</Navbar.Text>
                    <Navbar.Text className="py-3">Resume</Navbar.Text>
                    <Navbar.Text className="py-3">Contact</Navbar.Text>
                </Nav>
                <hr />
                <div className="text-center">
                    <Nav.Link href="tel:+17064613684" className="py-3">Phone</Nav.Link>
                    <Nav.Link href="mailto:simonanewton@gmail.com" className="py-3" target={"_blank"}>Email</Nav.Link>
                    <Nav.Link href="https://github.com/simonanewton" className="py-3" target={"_blank"}>GitHub</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/simonanewtondev/" className="py-3" target={"_blank"}>LinkedIn</Nav.Link>
                </div>
                <hr />
            </Navbar>
        );
    }
}

export default SideNav;