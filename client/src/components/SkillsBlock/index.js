import React, { Component } from "react";
import { Card } from "react-bootstrap";
import SkillSquare from "../SkillSquare";

class SkillsBlock extends Component {
    render() {
        return (
            <Card className="mx-3 my-5 main">
                {/* <Card.Title className="my-4 text-center">Technologies</Card.Title> */}
                <Card.Body className="d-flex justify-content-center">
                    <SkillSquare logo={"html"} name={"HTML"} />
                    <SkillSquare logo={"css3"} name={"CCS3"} />
                    <SkillSquare logo={"js"} name={"Javascript"} />
                    <SkillSquare logo={"bootstrap"} name={"Bootstrap"} />
                    <SkillSquare logo={"react"} name={"React"} />
                    <SkillSquare logo={"nodejs"} name={"Node.js"} />
                    <SkillSquare logo={"wordpress"} name={"WordPress"} />
                </Card.Body>
            </Card>
        );
    }
}

export default SkillsBlock;