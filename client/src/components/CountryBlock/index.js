import React, { Component } from "react";
import { Card, Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faArrowUpRightFromSquare, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import countriesArray from "../../assets/js/countries";
import "./index.css";

class CountryBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey: process.env.REACT_APP_GMAPS_KEY,
            countryData: {
                countryName: null,
                countryFlag: null,
                countryCaptial: null,
                countryRegion: null,
                countryLanguages: null,
                countryCurrencies: null,
                countryPopulation: null,
                countryLink: null
            }
        }
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
            console.log(name.replace(/ /g,"_"));
            return name.replace(/ /g,"_");
        }

        fetch(`https://restcountries.com/v3.1/name/${randomCountry}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    countryData: {
                        countryName: data[0].name.common,
                        countryFlag: Object.values(data[0].flags)[0],
                        countryCaptial: data[0].capital[0],
                        countryRegion: data[0].region,
                        countryLanguages: (Object.values(data[0].languages)).join(", "),
                        countryCurrencies: toUpperLetter(Object.values(Object.values(data[0].currencies)[0])[0]),
                        countryPopulation: data[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        countryLink: `https://en.wikipedia.org/wiki/${toUnderscore(data[0].name.common)}`
                    }
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
                    <Card.Title as={"h4"} className="my-3 text-center">Countries Traveled</Card.Title>
                    <FontAwesomeIcon icon={faEarthAmericas} size="xl" className="ms-2" />
                </Card.Header>
                <Card.Body className="">
                    <Row className="">
                        <Col xs={12} lg={3} className="d-flex justify-content-center left-col">
                            <div className="w-50 h-100 text-center d-flex">
                                <div className="py-4 my-auto">
                                    <Button variant="success" size="lg" className="mb-4" onClick={this.updateCountryData}>Random Country</Button>
                                    <p className="m-0">I've been to over 30 countries in my life, click the button above to learn more about them!</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Row className="no-gutters align-items-center">
                                <Col xs={12} lg={5} className="p-4">
                                    <div className="py-2 d-flex align-items-center mobile-center">
                                        <h4 className="pe-3 m-0">{this.state.countryData.countryName}</h4>
                                        <img src={this.state.countryData.countryFlag} alt="Country Flag" width="40" height="25" />
                                    </div>
                                    <hr className="ms-0 bg-dark w-75 mobile-none" />
                                    <h5 className="pe-2"><strong>Captial City: </strong>{this.state.countryData.countryCaptial}</h5>
                                    <h5 className="pe-2"><strong>Global Region: </strong>{this.state.countryData.countryRegion}</h5>
                                    <h5 className="pe-2"><strong>Official Languages: </strong>{this.state.countryData.countryLanguages}</h5>
                                    <h5 className="pe-2"><strong>Official Currency: </strong>{this.state.countryData.countryCurrencies}</h5>
                                    <h5 className="pe-2"><strong>Population Size: </strong>{this.state.countryData.countryPopulation}</h5>
                                    <div className="mt-3">
                                        <Button variant="primary" href={this.state.countryData.countryLink} target="_blank" >
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
                                <Col xs={12} lg={7} className="p-4 d-flex align-items-center">
                                    <iframe
                                        src={`https://www.google.com/maps/embed/v1/place?key=${this.state.apiKey}&q=${this.state.countryData.countryName}`}
                                        title="Google Maps Embed"
                                        width="100%"
                                        height="300"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        aria-hidden="false"
                                        tabIndex="0"
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