import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class ProjectBlock extends Component {

    render() {
        return (
            <Card className="mx-3 my-5 card-main">
                <Card.Header className="d-flex justify-content-center align-items-center">
                    <Card.Title as={"h4"} className="my-3 text-center">Personal Projects</Card.Title>
                    <FontAwesomeIcon icon={faLaptopCode} size="xl" className="ml-2" />
                </Card.Header>
                <Card.Body className="d-flex">
                    <div className="p-2 mx-3">
                        <Card.Img src={require("../../assets/images/sudoku-solver-react.png")} className="border" />
                    </div>
                    <div className="p-4 mr-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <Card.Title as={"h4"} className="m-0">Sudoku Solver</Card.Title>
                            <ListGroup horizontal>
                                <ListGroup.Item variant="light" action href="https://github.com/simonanewton/sudoku-solver-react" target="_blank" className="listgroup-link d-flex align-items-center">
                                    <FontAwesomeIcon icon={faGithub} size="lg" className="pr-3" />
                                    <span>Repository</span>
                                </ListGroup.Item>
                                <ListGroup.Item variant="light" action href="https://react-sudoku-solver-app.herokuapp.com" target="_blank" className="listgroup-link d-flex align-items-center">
                                    <FontAwesomeIcon icon={faDesktop} className="pr-3" />
                                    <span>Website</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                        <hr className="bg-dark" />
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur.
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default ProjectBlock;