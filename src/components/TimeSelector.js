import React, {Component} from "react";
import moment from 'moment';
import _ from 'lodash';
import DayPicker, {DateUtils} from 'react-day-picker';
import {SingleSelect, Button} from "lucid-ui";
import DateTable from './DateTable';
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

function getDaysBetween (start, end) {
    let dates = [];

    const startClone = start.clone().startOf('day');
    const endClone = end.clone().startOf('day');

    while(startClone.add(1, 'days').diff(endClone) < 0) {
        dates.push(startClone.clone().format('YYYY-MM-DD'));

    }
    return dates;
}

class TimeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: lastWeek,
            to: today,
            hasSubmitted: false,
        };
        this.handleSelectDate = this.handleSelectDate.bind(this);
        this.handleReset = this.handleReset.bind(this);
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
            hasSubmitted: false
		});
	}

    handleClick = e => {
        console.log(getDaysBetween(moment(this.state.from),  moment(this.state.to)))
        e.preventDefault
        this.setState({
            hasSubmitted: true,
        })
    }

    render() {
        const { from, to, hasSubmitted } = this.state;
        if (hasSubmitted) {
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
                    <DateTable />
                </div>
            );
        }
        else {
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
}

export default TimeSelector;
