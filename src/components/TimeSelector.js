//we will use a drop down menu in combination with a dateselect object
//use moment library for date formatting, and sharing data with the table
import React, {Component} from "react";
import moment from 'moment';
import {DateUtils} from 'react-day-picker';
import {SingleSelect, DateSelect, Button} from "lucid-ui";
import '../../node_modules/lucid-ui/dist/index.css';

const { Placeholder, Option } = SingleSelect;

/*
* This component is a time selector for the date range of the sunsets
* This uses the Moment library for date tools and calculations.
*
*/

const currDay = new Date(moment());
const lastWeek = new Date(moment().subtract(7, 'days'));
const twoWeeks = new Date(moment().add(14, 'days'))

//console.log(DateUtils.isDayBefore(, twoWeeks))

const TimeSelector = React.createClass ({
    getInitialState() {
		return {
            selectMode: 'from',
            from: lastWeek,
            to: currDay,
		};
	},

    handleSelectDate(date) {
		const { selectMode } = this.state;
		this.setState({
			selectMode: 'to',
			[selectMode]: date,
		});
        //if the range is greater than 2 weeks, throw Error
        if (DateUtils.isDayAfter(date, twoWeeks)){
            console.log("WE have a bad date range!");
        }
	},
    handleReset() {
		this.setState({
			selectMode: 'from',
			from: null,
			to: null,
		});
	},
    render() {
        const { selectMode, from, to } = this.state;
        return (
            <section style={{maxWidth: 400, height: 200}}>
                <DateSelect
                    from={from}
                    to={to}
                    selectMode={this.selectMode}
                    onSelectDate={this.handleSelectDate}
                />
                <div>
                    From: {from && from.toLocaleDateString('en-US')},
                    To: {to && to.toLocaleDateString('en-US')}
                </div>
                <Button onClick={this.handleReset}>Reset</Button>
            </section>
        );
    }
});

export default TimeSelector;
