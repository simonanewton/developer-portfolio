import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

class NavBlock extends Component {
    render() {
        return (
            <Nav.Item className="mb-3 border border-white rounded nav-button">
                <Nav.Link href={this.props.link} className="px-4 py-2 text-white d-flex align-items-center">
                    <FontAwesomeIcon icon={this.props.icon} size="lg" className="me-2" style={{ minWidth: "25px" }} />
                    <span>{this.props.name}</span>
                </Nav.Link>
            </Nav.Item>
        );
    }
}

export default NavBlock;