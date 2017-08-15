import React, {Component} from "react";
import {TextFieldValidated} from 'lucid-ui';
import '../../node_modules/lucid-ui/dist/index.css';

//This component is a validated text field for US address formats
const AddressForm = React.createClass ({
    getInitialState() {
		return {
			value: '',
		};
	},
    render() {
        return (
            <div id="addressGroup">
                <h3> Address </h3>
                <TextFieldValidated
                    value={this.state.value}
                    Error={this.state.value === 'Address' ? null : 'Please enter an address in the following format: Building # Street Name'}
                />
                <h3> City </h3>
                <TextFieldValidated
                    value={this.state.value}
                    Error={this.state.value === 'City' ? null : 'Please enter a City in the following format:'}
                />
                <h3> State </h3>
                <TextFieldValidated
                    value={this.state.value}
                    Error={this.state.value === 'State' ? null : 'Please enter a State in the following format:'}
                />
                <h3> Zip </h3>
                <TextFieldValidated
                    value={this.state.value}
                    Error={this.state.value === 'Zip' ? null : 'Please enter a Zip Code in the following format:'}
                />
            </div>
        );
    }
});

export default AddressForm;
