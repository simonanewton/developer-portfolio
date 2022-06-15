import React, { Component } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import countriesArray from "../../assets/js/countries";
import "./index.css";

class CountryBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey: "",
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
                        countryLink: `https://en.wikipedia.org/wiki/${data[0].name.common}`
                    }
                });
            })
            .catch(error => {
                console.log(error);
                return error;
            });
    }

    componentDidMount = () => {
        this.updateCountryData();
    }

    render() {
        return (
            <Card className="mx-3 my-5 card-main">
                <Card.Header>
                    <Card.Title as={"h4"} className="my-3 text-center">Countries Traveled</Card.Title>
                </Card.Header>
                <Card.Body className="p-0">
                    <Row className="no-gutters">
                        <Col xs={3} className="p-0 d-flex justify-content-center border-right border-dark">
                            <div className="w-50 h-100 text-center d-flex">
                                <div className="my-auto">
                                    <Button variant="success" size="lg" className="mb-4" onClick={this.updateCountryData}>Random Country</Button>
                                    <p className="m-0">I've been to over 30 countries in my life, click the button above to learn more about them!</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Row className="py-4 px-5 no-gutters align-items-center">
                                <Col className="pr-4">
                                    <div className="my-2 d-flex align-items-center">
                                        <h4 className="mr-3 m-0">{this.state.countryData.countryName}</h4>
                                        <img src={this.state.countryData.countryFlag} alt="Country Flag" width="40" height="25" />
                                    </div>
                                    <hr className="bg-dark ml-0" style={{ width: "50%" }} />
                                    <div className="d-flex align-middle">
                                        <h5 className="mr-2 font-weight-bold text-nowrap">Captial City:</h5>
                                        <h5 className="d-inline-block">{this.state.countryData.countryCaptial}</h5>
                                    </div>
                                    <div className="d-flex align-middle">
                                        <h5 className="mr-2 font-weight-bold text-nowrap">Global Region:</h5>
                                        <h5 className="d-inline-block">{this.state.countryData.countryRegion}</h5>
                                    </div>
                                    <div className="d-flex align-middle">
                                        <h5 className="mr-2 font-weight-bold text-nowrap">Official Languages:</h5>
                                        <h5 className="d-inline-block">{this.state.countryData.countryLanguages}</h5>
                                    </div>
                                    <div className="d-flex align-middle">
                                        <h5 className="mr-2 font-weight-bold text-nowrap">Official Currency:</h5>
                                        <h5 className="d-inline-block">{this.state.countryData.countryCurrencies}</h5>
                                    </div>
                                    <div className="d-flex align-middle">
                                        <h5 className="mr-2 font-weight-bold text-nowrap">Population Size:</h5>
                                        <h5 className="d-inline-block">{this.state.countryData.countryPopulation}</h5>
                                    </div>
                                    <div className="mt-3">
                                        <Button variant="primary" href={this.state.countryData.countryLink} target="_blank" >Learn More</Button>
                                    </div>
                                </Col>
                                <Col className="d-flex align-items-center">
                                    <iframe
                                        src={`https://www.google.com/maps/embed/v1/place?key=${this.state.apiKey}&q=${this.state.countryData.countryName}`}
                                        title="Google Maps Embed"
                                        width="100%"
                                        height="300"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
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