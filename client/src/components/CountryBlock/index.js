import React, { Component } from "react";
import { Card, Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faArrowUpRightFromSquare, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import countriesArray from "../../assets/js/countries";
import "./index.css";

class CountryBlock extends Component {
    constructor(props) {
        super(props);
        this.APIkey = process.env.REACT_APP_GMAPS_KEY;
        this.state = {
            name: null,
            flag: null,
            captial: null,
            region: null,
            languages: null,
            currencies: null,
            population: null,
            link: null
        };
    }

    updateCountryData = () => {
        const randomCountry = countriesArray[Math.floor(Math.random() * countriesArray.length)];

        const toUpperLetter = (currencies) => {
            return currencies
                .toLowerCase()
                .split(' ')
                .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
                .join(' ');
        }

        const toUnderscore = (name) => {
            return name.replace(/ /g, "_");
        }

        fetch(`https://restcountries.com/v3.1/name/${randomCountry}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data[0].name.common,
                    flag: Object.values(data[0].flags)[0],
                    captial: data[0].capital[0],
                    region: data[0].region,
                    languages: (Object.values(data[0].languages)).join(", "),
                    currencies: toUpperLetter(Object.values(Object.values(data[0].currencies)[0])[0]),
                    population: data[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    link: `https://en.wikipedia.org/wiki/${toUnderscore(data[0].name.common)}`
                });
            })
            .catch(error => {
                console.log(error);
                return error;
            });
    }

    renderTooltip = (props) => {
        return (
            <Tooltip {...props} >
                This information is provided by the API from this website.
            </Tooltip>
        );
    }

    componentDidMount = () => {
        this.updateCountryData();
    }

    render() {
        return (
            <Card>
                <Card.Header className="d-flex justify-content-center align-items-center">
                    <Card.Title as={"h4"} className="my-3 text-center">Travel Experience</Card.Title>
                    <FontAwesomeIcon icon={faEarthAmericas} size="xl" className="ms-2" />
                </Card.Header>
                <Card.Body className="p-0">
                    <Row className="g-0">
                        <Col lg={3} className="d-flex justify-content-center">
                            <div className="w-50 h-100 text-center d-flex">
                                <div className="pt-4 pt-lg-0 my-auto">
                                    <Button variant="success" size="lg" className="mb-4" onClick={this.updateCountryData}>Random Country</Button>
                                    <p className="m-0">I've been to over 30 countries in my life, click the button above to learn more about them!</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-4">
                            <Row className="g-0 align-items-center">
                                <Col lg={5} className="mb-4 mb-lg-0 pe-0 pe-lg-4">
                                    <div className="mb-3 d-flex align-items-center justify-content-center justify-content-lg-start">
                                        <h4 className="pe-3 m-0">{this.state.name}</h4>
                                        <img src={this.state.flag} alt="Country Flag" width="40" height="25" />
                                    </div>
                                    <h5 className="pe-2"><strong>Captial City: </strong>{this.state.captial}</h5>
                                    <h5 className="pe-2"><strong>Global Region: </strong>{this.state.region}</h5>
                                    <h5 className="pe-2"><strong>Official Languages: </strong>{this.state.languages}</h5>
                                    <h5 className="pe-2"><strong>Official Currency: </strong>{this.state.currencies}</h5>
                                    <h5 className="pe-2"><strong>Population Size: </strong>{this.state.population}</h5>
                                    <div className="mt-3">
                                        <Button variant="primary" href={this.state.link} target="_blank" >
                                            <span>Learn More</span>
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2" />
                                        </Button>
                                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 300 }} overlay={this.renderTooltip} >
                                            <Card.Link href="https://restcountries.com/" target="_blank" >
                                                <FontAwesomeIcon icon={faInfoCircle} className="ms-4 text-muted info-button" />
                                            </Card.Link>
                                        </OverlayTrigger>
                                    </div>
                                </Col>
                                <Col lg={7} className="px-0 d-flex align-items-center">
                                    <iframe
                                        src={`https://www.google.com/maps/embed/v1/place?key=${this.APIkey}&q=${this.state.name}`}
                                        title="Google Maps Embed"
                                        frameBorder="0"
                                        aria-hidden="false"
                                        tabIndex="0"
                                        id="google-maps"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default CountryBlock;
