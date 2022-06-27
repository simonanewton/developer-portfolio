import React, { Component } from "react";
import { Card, ListGroup, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class ContactBlock extends Component {
    render() {
        return (
            <Card className="mx-3 my-5 card-main">
                <Card.Header className="d-flex justify-content-between">
                    <div className="invisible">
                        <ListGroup horizontal>
                            <ListGroup.Item className="listgroup-link d-flex align-items-center">
                                <FontAwesomeIcon icon={faGithub} size="lg" className="pr-3" />
                                <span>GitHub</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="listgroup-link d-flex align-items-center">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" className="pr-3" />
                                <span>LinkedIn</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <Card.Title as={"h4"} className="m-0 text-center">Contact Me</Card.Title>
                        <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="xl" className="ml-2" />
                    </div>
                    <div className="">
                        <ListGroup horizontal>
                            <ListGroup.Item variant="light" action href="https://github.com/simonanewton/sudoku-solver-react" target="_blank" className="listgroup-link d-flex align-items-center">
                                <FontAwesomeIcon icon={faGithub} size="lg" className="pr-3" />
                                <span>GitHub</span>
                            </ListGroup.Item>
                            <ListGroup.Item variant="light" action href="https://react-sudoku-solver-app.herokuapp.com" target="_blank" className="listgroup-link d-flex align-items-center">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" className="pr-3" />
                                <span>LinkedIn</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Form className="py-2 mx-auto w-75">
                        <Form.Group controlId="formBasicFirstName" >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" />
                        </Form.Group>
                        <Form.Group controlId="formBasicSubject">
                            <Form.Label>Subject Type</Form.Label>
                            <Form.Control as="select" >
                                <option>Professional Inquiry</option>
                                <option value="1">Website Comment</option>
                                <option value="2">Other</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit" className="px-5">Submit</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default ContactBlock;