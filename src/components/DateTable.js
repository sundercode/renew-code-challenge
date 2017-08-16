import React, {Component} from "react";
import moment from 'moment';
import _ from 'lodash';
import {DataTable} from 'lucid-ui';
import {lat, lng} from './AddressForm';
import '../styles/css/bootstrap.min.css';

const urlForSunrise = (lat, lng, date) =>
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}`

function getDaysBetween (start, end) {
    let dates = [];

    const startClone = start.clone().startOf('day');
    const endClone = end.clone().startOf('day');

    while(startClone.add(1, 'days').diff(endClone) < 0) {
        dates.push(startClone.clone().format('YYYY-MM-DD'));

    }
    return dates;
}


class DateTable extends Component {
    //give default props of dates
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            maxLength: 14,
        };
    }

    //get the inbetween days and call sunset api
    //https://sunrise-sunset.org/api
    componentDidMount() {
        let days = getDaysBetween(moment(), moment().add(7, 'days'));
        for (var i = 0; i < days.length; i++){
            console.log(urlForSunrise(lat, lng, days[i]))
        }
        fetch(urlForSunrise(lat,lng, days[0]))
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
                  sunriseData: d
                })
                console.log(d);
            }, () => {
                this.setState({
                  requestFailed: true
                })
            })
    }

    render () {
        if (this.state.sunriseData) {
            return (
                <div>
                <DataTable data={[this.state.sunriseData.results]}>
                    <DataTable.Column field="sunrise"> Date</DataTable.Column>
                    <DataTable.Column field="sunset"> Sunrise</DataTable.Column>
                    <DataTable.Column field="solar_noon"> Sunset</DataTable.Column>
                    <DataTable.Column field="day_length"> Nautical Afternoon</DataTable.Column>
                    <DataTable.Column field="civil_twilight_begin"> Nautical Afternoon</DataTable.Column>
                    <DataTable.Column field="civil_twilight_end"> Nautical Afternoon</DataTable.Column>
                    <DataTable.Column field="nautical_twilight_begin"> Nautical Afternoon</DataTable.Column>
                    <DataTable.Column field="nautical_twilight_end"> Nautical Afternoon</DataTable.Column>
                    <DataTable.Column field="astronomical_twilight_begin"> Nautical Afternoon</DataTable.Column>
                    <DataTable.Column field="astronomical_twilight_end"> Nautical Afternoon</DataTable.Column>
                </DataTable>
                </div>
            );
        }
        else return (
            <p>Loading...</p>
        );
    }
}

export default DateTable;
