import React, { Component } from "react";
import { Card, CloseButton, Button } from "react-bootstrap";
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
                },
                {
                    logo: "wordpress",
                    title: "WordPress",
                    description: "WordPress is a free, open-source Content Managment System (CMS) used for creating websites. It is one of the most widely used web development platforms today, as it is a much more developer-friendly way to build a new site from scratch and manage various types of frontend and backend components. Generally speaking, you don't need to know any programming to make a website with Wordpress, which eliminates a huge barrier-to-entry for many aspiring to create a site for their business or personal needs.",
                    link: "https://blog.hubspot.com/website/what-is-wordpress"
                }
            ],
            showDescription: true,
            currentTitle: null,
            currentDescription: null,
            currentLink: null
        }
    }

    showDescription = () => {
        this.setState({ showDescription: true });
    }

    hideDescription = () => {
        this.setState({ showDescription: false });
    }

    updateCurrentSkill = (language) => {
        this.showDescription();
        this.setState({
            currentTitle: language.title,
            currentDescription: language.description,
            currentLink: language.link
        });
    }

    renderSquares = () => {
        let squares = [];
        this.state.languages.forEach(language => {
            squares.push(<SkillSquare key={language.logo} logo={language.logo} onClick={() => this.updateCurrentSkill(language)} />);
        });
        return squares;
    }

    componentDidMount = () => {
        this.updateCurrentSkill(this.state.languages[0]);
    }

    render() {
        return (
            <Card className="mx-3 my-5 main">
                <Card.Header className="d-flex justify-content-center align-items-center">
                    <Card.Title as={"h4"} className="my-3 text-center">Languages & Technologies</Card.Title>
                    <FontAwesomeIcon icon={faCode} size="xl" className="ml-2" />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center">
                    {this.renderSquares()}
                </Card.Body>
                <Card.Footer className={this.state.showDescription ? "d-block" : "d-none"}>
                    <CloseButton onClick={this.hideDescription} />
                    <Card.Title as={"h4"} className="mt-3 mb-0 text-center">{this.state.currentTitle}</Card.Title>
                    <Card.Body className="text-center w-75 mx-auto">
                        <Card.Text>
                            {this.state.currentDescription}
                        </Card.Text>
                        <Button variant="primary" href={this.state.currentLink} target="_blank">
                            <span>Learn More</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
                        </Button>
                    </Card.Body>
                </Card.Footer>
            </Card>
        );
    }
}

export default SkillsBlock;