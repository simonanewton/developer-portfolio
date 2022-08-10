import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class ResumeBlock extends Component {
    render() {
        return (
            <Card>
                <Card.Header className="d-flex justify-content-center align-items-center">
                    <Card.Title as={"h4"} className="my-3 text-center">Resume</Card.Title>
                    <FontAwesomeIcon icon={faCircleUser} size="xl" className="ms-2" />
                </Card.Header>
                <Card.Body className="p-0 d-flex justify-content-center">
                    <object
                        data={require("../../assets/images/newton-resume.pdf") + "#view=FitH"}
                        type="application/pdf"
                        name="resume"
                        className="border-none rounded-bottom w-100 vh-100">
                        <p className="mt-4 p-4 text-center">If you can read this the pdf display component has encountered an error.</p>
                    </object>
                </Card.Body>
            </Card>
        );
    }
}

export default ResumeBlock;