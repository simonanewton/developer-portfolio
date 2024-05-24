import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JS from "../images/javascript.png";
import BS5 from "../images/bootstrap.png";
import REACT from "../images/react.png";
import NODEJS from "../images/nodejs.png";
import NXTJS from "../images/nextjs.png";
import WRDPRESS from "../images/wordpress.png";
import SHPFY from "../images/shopify.png";

const skills = [
    {
        logo: HTML,
        title: "HTML5",
        description: "HTML stands for Hyper Text Markup Language. It is the standard language for webpages; it tells the browser what content to display and where to display it. I personally like to refer to HTML as the 'skeleton' of a webpage because it acts like bones in a human body by providing structure and shape for further contents. HTML is typically the first code written for a webpage and is crucial to making it function properly for both users and browsers.",
        type: "Front-End",
        difficulty: "Very Low",
        confidence: "Very High",
        link: "https://www.hostinger.com/tutorials/what-is-html"
    },
    {
        logo: CSS,
        title: "CSS3",
        description: "CSS stands for Casscading Style Sheet. It is responsible for what most of the webpage looks like and tells the browsers how to display certain elements. I like to refer to CSS as the 'eyes and ears' of a webpage because it is what gives a webpage its look, feel, and defining characteristics that differentiate it from other sites. While a majority of CSS is often superseded by libraries like Bootstrap like in this website, it is still a useful language for fine tune styling and polish.",
        type: "Front-End",
        difficulty: "Low",
        confidence: "High",
        link: "https://www.hostinger.com/tutorials/what-is-css"
    },
    {
        logo: JS,
        title: "JavaScript",
        description: "JavaScript is the standard programming language for the web. It is what allows many elements and components to functional properly or even at all. JavaScript is commonly considered to be the most challenging and complicated language among the three primary languages used for web development (HTML5, CSS3, JavaScript). I like to refer to JavaScript as the 'brains' of a webpage because it's the primary tool used for controlling most actions a user can do on a website.",
        type: "Back-End",
        difficulty: "High",
        confidence: "High",
        link: "https://www.hostinger.com/tutorials/what-is-javascript"
    },
    {
        logo: BS5,
        title: "Bootstrap 5",
        description: "Bootstrap is one of the most popular CSS frameworks used on the web. It allows developers to easily create webpages that are responsive and mobile-accessible by having the appropriate styling rules built into each component to ensure consistent functionality and readability. It is not necessary to learn a CSS framework to become a web developer but it is a great asset for making web content that looks good and functions correctly for you and your users no matter what device.",
        type: "Front-End",
        difficulty: "Moderate",
        confidence: "High",
        link: "https://www.hostinger.com/tutorials/what-is-bootstrap/"
    },
    {
        logo: REACT,
        title: "React",
        description: "React is a user interface (UI) JavaScript library created by Meta, the creators of Facebook. It allows developers to create UI elements efficiently, usually by creating templates for components that can render different data passed through it. React is great for websites that have a lot of iterative and interactive elements because it allows for easy duplication and manipulation of visual components. A user interface library like React is difficult to learn, but allows developers considerable more visual control over their webpage.",
        type: "Front-End, Back-End",
        difficulty: "Very High",
        confidence: "High",
        link: "https://www.hostinger.com/tutorials/what-is-react"
    },
    {
        logo: NODEJS,
        title: "Node.js",
        description: "Node.js is an asynchronous event-driven JavaScript runtime environment used for building web applications. This is the back-end of the website where JavaScript is used to tell the server how to operate, what files to use, and what content to generate. While Node.js only takes up a small portion of the code that is written to build a website, it is vitally important for turning your otherwise local probject into a public-facing website that users around the world can interact with.",
        type: "Back-End",
        difficulty: "High",
        confidence: "Moderate",
        link: "https://www.hostinger.com/tutorials/what-is-node-js"
    },
    {
        logo: NXTJS,
        title: "Next.js",
        description: "React is a user interface (UI) JavaScript library created by Meta, the creators of Facebook. It allows developers to create UI elements efficiently, usually by creating templates for components that can render different data passed through it. React is great for websites that have a lot of iterative and interactive elements because it allows for easy duplication and manipulation of visual components. A user interface library like React is High to learn, but allows developers considerable more visual control over their webpage.",
        type: "Front-End, Back-End",
        difficulty: "Very High",
        confidence: "Low",
        link: "https://www.hostinger.com/tutorials/what-is-react"
    },
    {
        logo: WRDPRESS,
        title: "Wordpress",
        description: "React is a user interface (UI) JavaScript library created by Meta, the creators of Facebook. It allows developers to create UI elements efficiently, usually by creating templates for components that can render different data passed through it. React is great for websites that have a lot of iterative and interactive elements because it allows for easy duplication and manipulation of visual components. A user interface library like React is High to learn, but allows developers considerable more visual control over their webpage.",
        type: "Front-End",
        difficulty: "Moderate",
        confidence: "Moderate",
        link: "https://www.hostinger.com/tutorials/what-is-react"
    },
    {
        logo: SHPFY,
        title: "Shopify",
        description: "React is a user interface (UI) JavaScript library created by Meta, the creators of Facebook. It allows developers to create UI elements efficiently, usually by creating templates for components that can render different data passed through it. React is great for websites that have a lot of iterative and interactive elements because it allows for easy duplication and manipulation of visual components. A user interface library like React is High to learn, but allows developers considerable more visual control over their webpage.",
        type: "Front-End",
        difficulty: "Easy",
        confidence: "High",
        link: "https://www.hostinger.com/tutorials/what-is-react"
    }
];

export default skills;