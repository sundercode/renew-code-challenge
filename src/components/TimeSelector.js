import React, {Component} from "react";
import moment from 'moment';
import _ from 'lodash';
import DayPicker, {DateUtils} from 'react-day-picker';
import {Button} from "lucid-ui";
import DateTable from './DateTable';
import {lat, lng} from './AddressForm';
import 'react-day-picker/lib/style.css';
import '../styles/css/bootstrap.min.css';

/*
* This component is a time selector for the date range of the sunsets
* This uses the Moment library for date tools and calculations.
*
*/
const today = new Date(moment());
const lastWeek = new Date(moment().subtract(7, 'days'));
const twoWeeks = new Date(moment().add(14, 'days'))
export let days = [];

const urlForTimeZone = (lat, lng, timestamp) =>
    `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${timestamp}&key=AIzaSyClW8MQo9G707kp0lwc5Q3YlvVNg66jR1c`


function getDaysBetween (start, end) {
    let dates = [];

    const startClone = start.clone();
    const endClone = end.clone();

    while(startClone.isBefore(end) || startClone.isSame(end)) {
        dates.push(startClone.clone().format('YYYY-MM-DD'));
        startClone.add(1, 'days');

    }
    return dates;
}

function convertToTimestamps (day) {
    //format { date: '11-08-17', sunrise: 11, sunset: 11, solar_noon:11, nautical_twilight_end: 11}
    let newDay = moment(day).unix();
    return newDay;
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
        days = getDaysBetween(moment(this.state.from),  moment(this.state.to))
        e.preventDefault
        if (moment(this.state.from).diff(moment(this.state.to), 'days') > 14){
            this.setState({
                hasSubmitted: false,
            })
        }
        this.setState({
            hasSubmitted: true,
        })

        fetch(urlForTimeZone(lat,lng, convertToTimestamps(days[0])))
            .then(response => {
                if (!response.ok) {
                  throw Error("Network request failed")
                }
            return response;
            })
            .then(d => d.json())
            .then(d => {
                this.setState({
                  timezoneData: d
                })
            }, () => {
                this.setState({
                  requestFailed: true
                })
            })
    }

    render() {
        const { from, to, hasSubmitted } = this.state;
        if (hasSubmitted && this.state.timezoneData) {
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
                    <p>All times are currently in UTC.</p>
                    <p>Local Timezone: {this.state.timezoneData.timeZoneName}</p>
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
                  <p>Please be sure to limit requests to 14 days. Waiting for submission...</p>
              </div>
            );
        }
    }
}

export default TimeSelector;
