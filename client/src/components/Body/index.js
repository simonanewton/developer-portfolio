import React, { Component } from "react";
import { Container, Stack } from "react-bootstrap";
import InfoBlock from "../InfoBlock";
import ImageBlock from "../ImageBlock";
import CountryBlock from "../CountryBlock";
import SkillsBlock from "../SkillsBlock";
import ProjectBlock from "../ProjectBlock";
import ContactBlock from "../ContactBlock";
import "./index.css";

class Body extends Component {
    render() {
        return (
            <Container as={"main"} className="py-5">
                <Stack gap={5}>
                    <ImageBlock />
                    <InfoBlock />
                    <CountryBlock />
                    <SkillsBlock />
                    <ProjectBlock />
                    <ContactBlock />
                </Stack>
            </Container>
        );
    }
}

export default Body;
