import React, { Component } from "react";
import { Card, ListGroup, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class ContactBlock extends Component {
    displayAlert = (value) => {
        if (value) {
            return (
                <div className="mt-2">
                    <Alert variant="success" className="mx-auto my-0 d-flex justify-content-center align-items-center w-75" >
                        <span>Your message has been sent successfully.</span>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" className="ms-2" />
                    </Alert>
                </div>
            );
        }

        else {
            return (
                <div className="mt-2">
                    <Alert variant="danger" className="mx-auto my-0 d-flex justify-content-center align-items-center w-75" >
                        <span>There has been an error sending your message.</span>
                        <FontAwesomeIcon icon={faCircleXmark} size="lg" className="ms-2" />
                    </Alert>
                </div>
            );
        }
    }

    displayError = () => {
        return (
            <div className="mt-2">
                <Alert variant="danger" className="mx-auto my-0 d-flex justify-content-center align-items-center w-75" >
                    <span>This contact form is currently under construction. Please refer to my email.</span>
                    <FontAwesomeIcon icon={faCircleXmark} size="lg" className="ms-2" />
                </Alert>
            </div>
        );
    }

    render() {
        return (
            <Card>
                <Card.Header className="py-4">
                    <div className="d-flex justify-content-center align-items-center">
                        <Card.Title as={"h4"} className="mb-0">Contact Me</Card.Title>
                        <FontAwesomeIcon icon={faEnvelope} size="xl" className="ms-2" />
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="mb-1 d-flex justify-content-center align-items-center">
                        <ListGroup horizontal>
                            <ListGroup.Item variant="light" action href="https://github.com/simonanewton" target="_blank" className="listgroup-link d-flex align-items-center">
                                <FontAwesomeIcon icon={faGithub} size="lg" className="pe-3" />
                                <span>GitHub</span>
                            </ListGroup.Item>
                            <ListGroup.Item variant="light" action href="https://www.linkedin.com/in/simonanewtondev" target="_blank" className="listgroup-link d-flex align-items-center">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" className="pe-3" />
                                <span>LinkedIn</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                    <Form className="py-2 mx-auto w-75">
                        <Row>
                            <Col xs={12} lg={6}>
                                <Form.Group controlId="formBasicFirstName" className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control placeholder="First Name" />
                                </Form.Group>
                            </Col>
                            <Col xs={12} lg={6}>
                                <Form.Group controlId="formBasicLastName" className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control placeholder="Last Name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} lg={6}>
                                <Form.Group controlId="formBasicEmail" className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Email Address" />
                                </Form.Group>
                            </Col>
                            <Col xs={12} lg={6}>
                                <Form.Group controlId="formBasicPhone" className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="tel" placeholder="Phone Number" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formBasicSubject" className="mb-3">
                            <Form.Label>Subject Type</Form.Label>
                            <Form.Control as="select" >
                                <option>Professional Inquiry</option>
                                <option value="1">Website Comment</option>
                                <option value="2">Other</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicMessage" className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit" className="px-5">Submit</Button>
                        </div>
                    </Form>
                    {this.displayError()}
                </Card.Body>
            </Card >
        );
    }
}

export default ContactBlock;
