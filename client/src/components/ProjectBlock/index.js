import React, { Component } from "react";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
import SudokuSolverImg from "../../assets/images/sudoku-solver-react.png";
import "./index.css";

class ProjectBlock extends Component {
    render() {
        return (
            <Card>
                <Card.Header className="d-flex justify-content-center align-items-center">
                    <Card.Title as={"h4"} className="my-3 text-center">Personal Projects</Card.Title>
                    <FontAwesomeIcon icon={faLaptopCode} size="xl" className="ms-2" />
                </Card.Header>
                <Card.Body>
                    <Row className="px-3">
                        <Col xs={{ order: 2, span: 12 }} lg={{ order: 1, span: 5 }} className="p-3 p-lg-2 my-auto">
                            <Card.Img src={SudokuSolverImg} className="project-img" />
                        </Col>
                        <Col xs={{ order: 1, span: 12 }} lg={{ order: 2, span: 7 }} className="px-3 px-xl-4 py-1 py-xl-4 my-auto">
                            <Row className="g-0 mb-3 align-items-center">
                                <Col xs={12} lg={5} xl={6} className="mb-3 mb-lg-0">
                                    <Card.Title as={"h4"} className="mb-0 text-center text-lg-start">Sudoku Solver</Card.Title>
                                </Col>
                                <Col xs={12} lg={7} xl={6}>
                                    <ListGroup horizontal="lg">
                                        <ListGroup.Item variant="light" action href="https://github.com/simonanewton/sudoku-solver-react" target="_blank" className="listgroup-link d-flex justify-content-center align-items-center">
                                            <FontAwesomeIcon icon={faGithub} size="lg" className="pe-3" />
                                            <span>Repository</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item variant="light" action href="https://react-sudoku-solver-app.herokuapp.com" target="_blank" className="listgroup-link d-flex justify-content-center align-items-center">
                                            <FontAwesomeIcon icon={faDesktop} className="pe-3" />
                                            <span>Website</span>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Card.Text>
                                    This web application is an imitation of the classic puzzle game Sudoku. Please note, it is not finished and is still
                                    being worked on, so please forgive the lack of functionality. I used this project as a way to practice my React and
                                    React Bootstrap skills because I was rusty and knew I wanted to remake my personal website using this framework. Additionally,
                                    I chose to use a third-party API for generating puzzle board layouts to save time and practice making API calls. To keep
                                    up to date with this project, follow along on GitHub and by checking out the project website link hosted by Heroku.
                                </Card.Text>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default ProjectBlock;
