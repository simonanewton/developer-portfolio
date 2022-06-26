import React, { Component } from "react";
import InfoBlock from "../InfoBlock";
import ImageBlock from "../ImageBlock";
import CountryBlock from "../CountryBlock";
import SkillsBlock from "../SkillsBlock";
import ProjectBlock from "../ProjectBlock";
import "./index.css";


class Body extends Component {
    render() {
        return (
            <main className="content">
                <section className="d-flex about">
                    <InfoBlock />
                    <ImageBlock />
                </section>
                <div>
                   <CountryBlock />
                   <SkillsBlock />
                   <ProjectBlock />
                </div>
            </main>
        );
    }
}

export default Body;
