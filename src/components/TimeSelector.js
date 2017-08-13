//we will use a drop down menu in combination with a dateselect object
//use moment library for date formatting, and sharing data with the table
import React, {Component} from "react";
import * as moment from 'moment';
import {SingleSelect, DateSelect} from "lucid-ui";

const { Placeholder, Option } = SingleSelect;

export default class TimeSelector extends Component {
    getInitialState() {
		return {
			selectedIndex: null,
		};
	}

	handleSelect(optionIndex) {
		this.setState({
			selectedIndex: optionIndex,
		});
	}
    render() {
        return (
            <SingleSelect onSelect={this.handleSelect}>
                <Placeholder>Select Color</Placeholder>
                <Option>Red</Option>
                <Option>Green</Option>
                <Option>Blue</Option>
            </SingleSelect>
        );
    }
}
