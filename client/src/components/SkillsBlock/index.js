import React, { Component } from "react";
import { Card, Row, Col, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import SkillSquare from "../SkillSquare";
import skills from "../../assets/js/skills";

class SkillsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTitle: null,
            currentDescription: null,
            currentType: null,
            currentDifficulty: null,
            currentConfidence: null,
            currentLink: null
        };
    }

    updateCurrentSkill = (language) => {
        this.setState({
            currentTitle: language.title,
            currentDescription: language.description,
            currentType: language.type,
            currentDifficulty: language.difficulty,
            currentConfidence: language.confidence,
            currentLink: language.link
        });
    }

    renderSquares = () => {
        return skills.map(language => <SkillSquare key={language.logo} logo={language.logo} update={() => this.updateCurrentSkill(language)} />);
    }

    componentDidMount = () => {
        this.updateCurrentSkill(skills[0]);
    }

    render() {
        return (
            <Card>
                <Card.Header className="d-flex justify-content-center align-items-center">
                    <Card.Title as={"h4"} className="my-3 text-center">Languages & Technologies</Card.Title>
                    <FontAwesomeIcon icon={faCode} size="xl" className="ms-2" />
                </Card.Header>
                <Card.Body className="p-2 p-md-3">
                    <Row className="g-0 align-items-center">
                        <Col className="col-7">
                            <Row className="g-0">
                                {this.renderSquares()}
                            </Row>
                        </Col>
                        <Col className="col-5">
                            <ListGroup className="p-2">
                                <Card.Header className="text-center fw-bold bg-transparent border">{this.state.currentTitle}</Card.Header>
                                <ListGroup.Item>
                                    <h6 className="mb-0 me-2 fw-bold d-inline-block">Description:</h6>
                                    <p className="lh-base d-inline">{this.state.currentDescription}</p>
                                    <Button variant="outline-primary" href={this.state.currentLink} target="_blank" className="mx-auto mt-2 w-50 d-block">
                                        <span>Learn More</span>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2" />
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default SkillsBlock;
