import React, { Component } from "react";
import { Card, Row, Collapse, CloseButton, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import SkillSquare from "../SkillSquare";

class SkillsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [
                {
                    logo: "html",
                    title: "HTML5",
                    description: "HTML stands for Hyper Text Markup Language. It is the standard language for webpages; it tells the browser what content to display and where to display it. I personally like to refer to HTML as the 'skeleton' of a webpage because it acts like bones in a human body by providing structure and shape for further contents. HTML is typically the first code written for a webpage and is crucial to making it function properly for both users and browsers.",
                    link: "https://www.hostinger.com/tutorials/what-is-html"
                },
                {
                    logo: "css3",
                    title: "CSS3",
                    description: "CSS stands for Casscading Style Sheet. It is responsible for what most of the webpage looks like and tells the browsers how to display certain elements. I like to refer to CSS as the 'eyes and ears' of a webpage because it is what gives a webpage its look, feel, and defining characteristics that differentiate it from other sites. While a majority of CSS is often superseded by libraries like Bootstrap like in this website, it is still a useful language for fine tune styling and polish.",
                    link: "https://www.hostinger.com/tutorials/what-is-css"
                },
                {
                    logo: "js",
                    title: "JavaScript",
                    description: "JavaScript is the standard programming language for the web. It is what allows many elements and components to functional properly or even at all. JavaScript is commonly considered to be the most challenging and complicated language among the three primary languages used for web development (HTML5, CSS3, JavaScript). I like to refer to JavaScript as the 'brains' of a webpage because it's the primary tool used for controlling most actions a user can do on a website.",
                    link: "https://www.hostinger.com/tutorials/what-is-javascript"
                },
                {
                    logo: "bootstrap",
                    title: "Bootstrap 5",
                    description: "Bootstrap is one of the most popular CSS frameworks used on the web. It allows developers to easily create webpages that are responsive and mobile-accessible by having the appropriate styling rules built into each component to ensure consistent functionality and readability. It is not necessary to learn a CSS framework to become a web developer but it is a great asset for making web content that looks good and functions correctly for you and your users no matter what device.",
                    link: "https://www.hostinger.com/tutorials/what-is-bootstrap/"
                },
                {
                    logo: "react",
                    title: "React",
                    description: "React is a user interface (UI) JavaScript library created by Meta, the creators of Facebook. It allows developers to create UI elements efficiently, usually by creating templates for components that can render different data passed through it. React is great for websites that have a lot of iterative and interactive elements because it allows for easy duplication and manipulation of visual components. A user interface library like React is difficult to learn, but allows developers considerable more visual control over their webpage.",
                    link: "https://www.hostinger.com/tutorials/what-is-react"
                },
                {
                    logo: "nodejs",
                    title: "Node.js",
                    description: "Node.js is an asynchronous event-driven JavaScript runtime environment used for building web applications. This is the back-end of the website where JavaScript is used to tell the server how to operate, what files to use, and what content to generate. While Node.js only takes up a small portion of the code that is written to build a website, it is vitally important for turning your otherwise local probject into a public-facing website that users around the world can interact with.",
                    link: "https://www.hostinger.com/tutorials/what-is-node-js"
                }
            ],
            showDescription: false,
            currentTitle: null,
            currentDescription: null,
            currentLink: null
        };
    }

    showDescription = () => {
        this.setState({ showDescription: true });
    }

    hideDescription = () => {
        this.setState({ showDescription: false });
    }

    updateCurrentSkill = (language) => {
        this.setState({
            currentTitle: language.title,
            currentDescription: language.description,
            currentLink: language.link,
            showDescription: true
        });
    }

    renderSquares = () => {
        return this.state.languages.map(language => <SkillSquare key={language.logo} logo={language.logo} update={() => this.updateCurrentSkill(language)} />);
    }

    componentDidMount = () => {
        this.updateCurrentSkill(this.state.languages[0]);
    }

    render() {
        return (
            <Card>
                <Card.Header className="d-flex justify-content-center align-items-center">
                    <Card.Title as={"h4"} className="my-3 text-center">Languages & Technologies</Card.Title>
                    <FontAwesomeIcon icon={faCode} size="xl" className="ms-2" />
                </Card.Header>
                <Card.Body>
                    <Row className="justify-content-center">
                        {this.renderSquares()}
                    </Row>
                </Card.Body>
                <Collapse in={this.state.showDescription}>
                    <Card.Footer>
                        <div className="my-2 d-flex justify-content-end">
                            <CloseButton onClick={this.hideDescription} />
                        </div>
                        <Card.Title as={"h4"} className="mt-0 mb-3 text-center">{this.state.currentTitle}</Card.Title>
                        <Card.Body className="text-center mx-auto">
                            <Card.Text className="px-5">
                                {this.state.currentDescription}
                            </Card.Text>
                            <Button variant="primary" href={this.state.currentLink} target="_blank" className="mb-3">
                                <span>Learn More</span>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2" />
                            </Button>
                        </Card.Body>
                    </Card.Footer>
                </Collapse>
            </Card>
        );
    }
}

export default SkillsBlock;
