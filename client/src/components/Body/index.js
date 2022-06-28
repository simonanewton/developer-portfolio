import React, { Component } from "react";
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
            <main className="px-5 pb-5">
                <section className="d-flex">
                    <InfoBlock />
                    <ImageBlock />
                </section>
                <div>
                   <CountryBlock />
                   <SkillsBlock />
                   <ProjectBlock />
                   <ResumeBlock />
                   <ContactBlock />
                </div>
            </main>
        );
    }
}

export default Body;
