import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class ResumeBlock extends Component {
    render() {
        return (
            <Card className="mx-3 my-5 card-main">
                <Card.Header className="d-flex justify-content-center align-items-center">
                    <Card.Title as={"h4"} className="my-3 text-center">Resume</Card.Title>
                    <FontAwesomeIcon icon={faCircleUser} size="xl" className="ml-2" />
                </Card.Header>
                <Card.Body className="p-0 d-flex justify-content-center">
                    <object 
                        data={require("../../assets/images/resume-temp.pdf") + "#view=FitV"} 
                        type="application/pdf" 
                        name="view" 
                        className="border-none rounded-bottom w-100 vh-100" />
                </Card.Body>
            </Card>
        );
    }
}

export default ResumeBlock;