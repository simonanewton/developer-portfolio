import React, { Component } from "react";
import InfoBlock from "../InfoBlock";
import ImageBlock from "../ImageBlock";
import CountryBlock from "../CountryBlock";
import "./index.css";
import SkillsBlock from "../SkillsBlock";


class Body extends Component {
    render() {
        return (
            <main className="content">
                <section className="d-flex about">
                    <InfoBlock />
                    <ImageBlock />
                </section>
                <section>
                   <CountryBlock />
                   <SkillsBlock />
                </section>
            </main>
        );
    }
}

export default Body;
