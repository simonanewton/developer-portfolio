import React, { Component } from "react";
import { Card, ListGroup, Row, Col, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
import SudokuSolverImg from "../../assets/images/sudoku-solver-react.png";
import DevLogImg from "../../assets/images/dev-log.png";
import "./index.css";

class ProjectBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFirstModal: false,
            showSecondModal: false
        }
    }

    toggleFirstModal = () => {
        this.setState({ showFirstModal: !this.state.showFirstModal });
    }

    toggleSecondModal = () => {
        this.setState({ showSecondModal: !this.state.showSecondModal });
    }

    render() {
        return (
            <Card>
                <Card.Header className="d-flex justify-content-center align-items-center">
                    <Card.Title as={"h4"} className="my-3 text-center">Personal Projects</Card.Title>
                    <FontAwesomeIcon icon={faLaptopCode} size="xl" className="ms-2" />
                </Card.Header>
                <Card.Body className="px-3 py-0">
                    <Row className="p-4 border-bottom">
                        <Col xs={{ order: 2, span: 12 }} lg={{ order: 1, span: 5 }} className="p-3 p-lg-2 my-auto">
                            <Card.Img src={DevLogImg} onClick={this.toggleFirstModal} className="project-img" />
                            <Modal size="lg" centered show={this.state.showFirstModal} onHide={this.toggleFirstModal} className="project-modal">
                                <Card.Img src={DevLogImg} className="rounded" />
                            </Modal>
                        </Col>
                        <Col xs={{ order: 1, span: 12 }} lg={{ order: 2, span: 7 }} className="px-3 px-xl-4 py-1 py-xl-4 my-auto">
                            <Row className="g-0 mb-3 align-items-center">
                                <Col xs={12} lg={5} xl={6} className="mb-3 mb-lg-0">
                                    <Card.Title as={"h4"} className="mb-0 text-center text-lg-start">Web Developer Log</Card.Title>
                                </Col>
                                <Col xs={12} lg={7} xl={6}>
                                    <ListGroup horizontal="lg">
                                        <ListGroup.Item variant="light" action href="https://github.com/simonanewton/dev-log" target="_blank"
                                            className="listgroup-link d-flex justify-content-center align-items-center">
                                            <FontAwesomeIcon icon={faGithub} size="lg" className="pe-3" />
                                            <span>Repository</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item variant="light" action href="https://web-developer-log.herokuapp.com/" target="_blank"
                                            className="listgroup-link d-flex justify-content-center align-items-center">
                                            <FontAwesomeIcon icon={faDesktop} className="pe-3" />
                                            <span>Website</span>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Card.Text>
                                    This web application showcases my developer Twitter account, where I share my thoughts about the development process and post progress
                                    updates on personal projects. I created this application to challenge myself by integrating the official Twitter API to get live data
                                    from my account and a MongoDB database to store the tweet data. This project helped me significantly improve my skills with real world
                                    third-party API's in addition to creating my own backend routes to manage an external database. Visit the respository on GitHub to learn
                                    more and stay tuned for future updates and tweets!
                                </Card.Text>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="p-4">
                        <Col xs={12} lg={7} className="px-3 px-xl-4 py-1 py-xl-4 my-auto">
                            <Row className="g-0 mb-3 align-items-center">
                                <Col xs={12} lg={5} xl={6} className="mb-3 mb-lg-0">
                                    <Card.Title as={"h4"} className="mb-0 text-center text-lg-start">Sudoku Solver</Card.Title>
                                </Col>
                                <Col xs={12} lg={7} xl={6}>
                                    <ListGroup horizontal="lg">
                                        <ListGroup.Item variant="light" action href="https://github.com/simonanewton/sudoku-solver-react" target="_blank"
                                            className="listgroup-link d-flex justify-content-center align-items-center">
                                            <FontAwesomeIcon icon={faGithub} size="lg" className="pe-3" />
                                            <span>Repository</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item variant="light" action href="https://react-sudoku-solver-app.herokuapp.com" target="_blank"
                                            className="listgroup-link d-flex justify-content-center align-items-center">
                                            <FontAwesomeIcon icon={faDesktop} className="pe-3" />
                                            <span>Website</span>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Card.Text>
                                    This web application is an imitation of the classic puzzle game Sudoku. I created this project as a way to practice my React and
                                    Bootstrap skills by going through the process of building a full-stack application that serves a simple purpose, while also taking
                                    advantage of React's stateful design. This project utilizes a third-party API for generating puzzle board data to save time during
                                    development and practice making API calls. To keep up to date with this application, follow along on GitHub and by checking out the
                                    site link hosted on Heroku.
                                </Card.Text>
                            </Row>
                        </Col>
                        <Col xs={12} lg={5} className="p-3 p-lg-2 my-auto">
                            <Card.Img src={SudokuSolverImg} onClick={this.toggleSecondModal} className="project-img" />
                            <Modal size="lg" centered show={this.state.showSecondModal} onHide={this.toggleSecondModal} className="project-modal">
                                <Card.Img src={SudokuSolverImg} className="rounded" />
                            </Modal>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default ProjectBlock;
