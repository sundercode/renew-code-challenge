import React, {Component} from "react";
import {TextFieldValidated, Button} from 'lucid-ui';
import Form from 'react-jsonschema-form';
import '../styles/css/bootstrap.min.css';

//google maps/timezone/geocoding api key AIzaSyClW8MQo9G707kp0lwc5Q3YlvVNg66jR1c
const schema = {
    title: "",
    type: "object",
    required: ["title", "city", "state", "zip"],
    properties: {
        title: {
            type: "string",
            title: "Building # and Street",
            default: "",
        },
        city: {
            type: "string",
            title: "City",
            default: "",
        },
        state: {
            type: "string",
            title: "State",
            default: "",
        },
        zip: {
            type: "number",
            title: "Zip Code",
            default: "",
        }
    }
}

const uiSchema = {
    title: {
        "ui:placeholder": "1234 NW Main St.",
    },
    city: {
        "ui:placeholder": "New York City",
    },
    state: {
        "ui:placeholder": "NY",
    },
    zip: {
        "ui:placeholder": "10019",
    }
}

//function to submit address forms as stringified json
function collectInput () {

}
//This component is a validated text field for US address formats
class AddressForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }
    render() {
        return (
            <div id="addressGroup">
                <Form
                    schema={schema}
                    uiSchema={uiSchema}
                />
            </div>
        );
    }
}

export default AddressForm;
