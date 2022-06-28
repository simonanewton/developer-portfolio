import React, { Component } from "react";
import { Card, ListGroup, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeCircleCheck, faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class ContactBlock extends Component {
    displayAlert = () => {
        return (
            <div className="mt-2">
                <Alert variant="success" className="mx-auto my-0 d-flex justify-content-center align-items-center w-75" >
                    <span>Your message has been sent successfully.</span>
                    <FontAwesomeIcon icon={faCircleCheck} size="lg" className="ml-2" />
                </Alert>
                <Alert variant="danger" className="mx-auto my-0 d-flex justify-content-center align-items-center w-75" >
                    <span>There has been an error sending your message.</span>
                    <FontAwesomeIcon icon={faCircleXmark} size="lg" className="ml-2" />
                </Alert>
            </div>
        );
    }

    render() {
        return (
            <Card className="mt-5 card-main">
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
                            <ListGroup.Item variant="light" action href="https://github.com/simonanewton" target="_blank" className="listgroup-link d-flex align-items-center">
                                <FontAwesomeIcon icon={faGithub} size="lg" className="pr-3" />
                                <span>GitHub</span>
                            </ListGroup.Item>
                            <ListGroup.Item variant="light" action href="https://www.linkedin.com/in/simonanewtondev" target="_blank" className="listgroup-link d-flex align-items-center">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" className="pr-3" />
                                <span>LinkedIn</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Form className="py-2 mx-auto w-75">
                        <div className="d-flex">
                            <Form.Group controlId="formBasicFirstName" className="w-50 mr-4">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicLastName" className="w-50">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="" placeholder="Last Name" />
                            </Form.Group>
                        </div>
                        <div className="d-flex">
                            <Form.Group controlId="formBasicEmail" className="w-50 mr-4">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPhone" className="w-50">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="tel" placeholder="Phone Number" />
                            </Form.Group>
                        </div>
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