import React, { Component } from "react";
import SideNav from "../SideNav";
import "./index.css";

class Header extends Component {
    render() {
        return (
            <header>
                <SideNav />
                <div className="p-4 mx-auto text-center text-white">
                    <h1>Simon Newton</h1>
                </div>
            </header>

        );
    }
}

export default Header;
