import React, { Component } from "react";
import ImageBlock from "../ImageBlock";
import InfoBlock from "../InfoBlock";
import "./index.css";

class Body extends Component {
    render() {
        return (
            <main className="d-flex content">
                <InfoBlock />
                <ImageBlock />
            </main>
        );
    }
}

export default Body;
