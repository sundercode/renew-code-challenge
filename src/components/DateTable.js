import React, {Component} from "react";
import moment from 'moment';
import _ from 'lodash';
import {DataTable} from 'lucid-ui';
import {lat, lng} from './AddressForm';
import {days} from './TimeSelector';
import '../styles/css/bootstrap.min.css';

let finalDates = [];
let tableData = [];
const urlForSunrise = (lat, lng, date) =>
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}`

function createTableData (d, sunriseResponse) {
    //zip together the dates with their appropriate sunriseResponse from the api
    let newSunriseResponse = _.pick(sunriseResponse, ['sunrise', 'sunset', 'solar_noon', 'nautical_twilight_end']);
    return _.assign({date: d}, newSunriseResponse);
}

function convertToMilitary (time) {
    let newTime = moment(time, "hh:mm A").format("HH:mm");
}

class DateTable extends Component {
    //give default props of dates
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
        };
    }

    //get the inbetween days and call sunset api
    //https://sunrise-sunset.org/api
    componentDidMount() {
      for (var i = 0; i <= days.length; i++){
        fetch(urlForSunrise(lat,lng, days[i]))
          .then(response => {
              if (!response.ok) {
                throw Error("Network request failed")
              }
          return response;
          })
          .then(d => d.json())
          .then(d => {
              this.setState({
                sunriseData: d
              })
              finalDates.push(d)
          }, () => {
              this.setState({
                requestFailed: true
              })
          })
      }
    }

    render () {
        let tableData = [];
        for (var i = 0; i < finalDates.length; i++) {
            tableData.push(createTableData(days[i], finalDates[i].results));
        }
        if (this.state.sunriseData) {
            return (
                <div>
                <DataTable data={tableData}>
                    <DataTable.Column field="date"> Date</DataTable.Column>
                    <DataTable.Column field="sunrise"> Sunrise</DataTable.Column>
                    <DataTable.Column field="sunset"> Sunset</DataTable.Column>
                    <DataTable.Column field="solar_noon"> Solar Noon</DataTable.Column>
                    <DataTable.Column field="nautical_twilight_end"> Nautical Twilight End</DataTable.Column>
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
