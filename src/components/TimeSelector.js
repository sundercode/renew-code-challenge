//we will use a drop down menu in combination with a dateselect object
//use moment library for date formatting, and sharing data with the table
import React, {Component} from "react";
import moment from 'moment';
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
const currDay = new Date(moment());
const lastWeek = new Date(moment().subtract(7, 'days'));
const twoWeeks = new Date(moment().add(14, 'days'))

class TimeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: lastWeek,
            to: currDay,
        };
        this.handleSelectDate = this.handleSelectDate.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSelectDate = date => {
        const range = DateUtils.addDayToRange(date, this.state)
		this.setState(range)
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
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default TimeSelector;
