import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

class NavBlock extends Component {
    render() {
        return (
            <Nav.Item className="mb-3 border border-white rounded w-100 nav-button">
                <Nav.Link href={this.props.link} className="px-3 py-2 text-white d-flex justify-content-between align-items-center w-100">
                    <span>{this.props.name}</span>
                    <FontAwesomeIcon icon={this.props.icon} size="lg" className="ml-2" style={{ minWidth: "25px" }} />
                </Nav.Link>
            </Nav.Item>
        );
    }
}

export default NavBlock;