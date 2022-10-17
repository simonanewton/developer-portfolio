import React, { Component } from "react";
import { Container, Stack } from "react-bootstrap";
import TitleBlock from "./components/TitleBlock";
import InfoBlock from "./components/InfoBlock";
import SkillsBlock from "./components/SkillsBlock";
import ProjectBlock from "./components/ProjectBlock";
import ContactBlock from "./components/ContactBlock";
import "./App.css";

class App extends Component {
	render() {
		return (
			<main>
				<Container className="py-5">
					<Stack gap={5}>
						<TitleBlock />
						<InfoBlock />
						<SkillsBlock />
						<ProjectBlock />
						<ContactBlock />
					</Stack>
				</Container>
			</main>
		);
	}
}

export default App;
