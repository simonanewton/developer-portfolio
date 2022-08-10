import React, { Component } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import InfoBlock from "../InfoBlock";
import ImageBlock from "../ImageBlock";
import CountryBlock from "../CountryBlock";
import SkillsBlock from "../SkillsBlock";
import ProjectBlock from "../ProjectBlock";
import ContactBlock from "../ContactBlock";
import ResumeBlock from "../ResumeBlock";
import "./index.css";

class Body extends Component {
    render() {
        return (
            <Container className="px-4 my-5">
                <Row>
                    <Col xs={12} xl={6} className="mb-5">
                        <InfoBlock />
                    </Col>
                    <Col xs={12} xl={6} className="mb-5">
                        <ImageBlock />
                    </Col>
                </Row>
                <Stack gap={5}>
                    <CountryBlock />
                    <SkillsBlock />
                    <ProjectBlock />
                    <ResumeBlock />
                    <ContactBlock />
                </Stack>
            </Container>
        );
    }
}

export default Body;
