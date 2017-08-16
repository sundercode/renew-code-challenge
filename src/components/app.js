import React, {Component} from "react";
import {Panel} from "lucid-ui";
import '../../node_modules/lucid-ui/dist/index.css'; //add webpack loader
import TimeSelector from "./TimeSelector";
import AddressForm from "./AddressForm";

export default class App extends Component {
    render() {
        return (
            <div>
                <Panel>
                    <Panel.Header><strong>Enter a Valid US Address</strong></Panel.Header>
                    <AddressForm />
                </Panel>
                <Panel>
                    <Panel.Header><strong>Pick a Date Range</strong></Panel.Header>
                    <TimeSelector />
                </Panel>
            </div>
        );
    }
}
