import React, {Component} from "react";
import {TextFieldValidated, Button} from 'lucid-ui';
import Form from 'react-jsonschema-form';
import '../styles/css/bootstrap.min.css';

//google maps/timezone/geocoding api key AIzaSyClW8MQo9G707kp0lwc5Q3YlvVNg66jR1c
const schema = {
    title: "",
    type: "object",
    required: ["address", "city", "state"],
    properties: {
        address: {
            type: "string",
            title: "Building # and Street",
        },
        city: {
            type: "string",
            title: "City",
        },
        state: {
            type: "string",
            title: "State",
            maxLength: 2,
        },
    }
}

const uiSchema = {
    address: {
        "ui:placeholder": "1234 NW Main St.",
    },
    city: {
        "ui:placeholder": "New York",
    },
    state: {
        "ui:placeholder": "NY",
    },
}

export let lat = 0;
export let lng = 0;

const urlForGeocode = address =>
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyClW8MQo9G707kp0lwc5Q3YlvVNg66jR1c`

//This component is a validated text field for US address formats. On Submit,
//pass this to google maps API to geocode.
class AddressForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            requestFailed: false,
            hasSubmitted: false,

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit  = dt => {
        const addressString = dt.formData.address + ",+"+ dt.formData.city + ",+"+ dt.formData.state;
        this.setState({
            hasSubmitted: true,
        })
        fetch(urlForGeocode(addressString))
            .then(response => {
                if (!response.ok) {
                  throw Error("Network request failed")
                }
            //console.log(response);
            return response;
            })
            .then(d => d.json())
            .then(d => {
                this.setState({
                  geocodeData: d
                })
                lat = this.state.geocodeData.results[0].geometry.location.lat;
                lng = this.state.geocodeData.results[0].geometry.location.lng;
            }, () => {
                this.setState({
                  requestFailed: true
                })
            })
    }

    render() {
        if (this.state.hasSubmitted && this.state.geocodeData) {
            return (
                <div id="addressGroup">
                    <Form
                        schema={schema}
                        onSubmit={this.handleSubmit}
                        uiSchema={uiSchema}
                    />
                    <p>
                        Latitude: {this.state.geocodeData.results[0].geometry.location.lat},
                        Longitude: {this.state.geocodeData.results[0].geometry.location.lng}
                    </p>
                </div>
            );
        }
        else {
            return (
                <div id="addressGroup">
                    <Form
                        schema={schema}
                        onSubmit={this.handleSubmit}
                        uiSchema={uiSchema}
                    />
                    <p>Waiting on Form Submission...</p>
                </div>
            );
        }
    }
}

export default AddressForm;
