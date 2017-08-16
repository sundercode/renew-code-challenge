//we will use a drop down menu in combination with a dateselect object
//use moment library for date formatting, and sharing data with the table
import React, {Component} from "react";
import moment from 'moment';
import _ from 'lodash';
import DayPicker, {DateUtils} from 'react-day-picker';
import {SingleSelect, Button} from "lucid-ui";
import 'react-day-picker/lib/style.css';
import '../styles/css/bootstrap.min.css';

const { Placeholder, Option } = SingleSelect;

/*
* This component is a time selector for the date range of the sunsets
* This uses the Moment library for date tools and calculations.
*
*/
const today = new Date(moment());
const lastWeek = new Date(moment().subtract(7, 'days'));
const twoWeeks = new Date(moment().add(14, 'days'))

class TimeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: lastWeek,
            to: today,
        };
        this.handleSelectDate = this.handleSelectDate.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSelectDate = date => {
        const range = DateUtils.addDayToRange(date, this.state)
		this.setState(range)
        console.log(range)
        //if the range is greater than 2 weeks, throw Error
        if (DateUtils.isDayAfter(date, twoWeeks)){
            console.log("WE have a bad date range!");
        }
	}

    handleReset = e => {
        e.preventDefault
		this.setState({
			from: null,
			to: null,
		});
	}

    handleClick = e => {
        //take the dates given and get an array of all the dates in between the two.
        //use this place to throw error if the range is longer than 14 days
        e.preventDefault;
        const todayCopy = _.clone(this.state.to);
        const fromCopy = _.clone(this.state.from);
        //console.log(dates)


    }

    render() {
        const { from, to } = this.state;
        return (
            <div className="RangeExample">
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, {from, to}]}
                    onDayClick={this.handleSelectDate}
                    fixedWeeks
                />
                <div>
                    From: {from && from.toLocaleDateString('en-US')},
                    To: {to && to.toLocaleDateString('en-US')}
                </div>
                <Button onClick={this.handleReset}>Reset Range Select</Button>
                <Button onClick={this.handleClick}> Submit </Button>
            </div>
        );
    }
}

export default TimeSelector;
