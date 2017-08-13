import React, {Component} from "react";
import {Panel} from "lucid-ui";
import '../../node_modules/lucid-ui/dist/index.css'; //add webpack loader
import TimeSelector from "./TimeSelector";

export default class App extends Component {
    render() {
        return (
            <Panel>
                <Panel.Header><strong>Pick a Date Range</strong></Panel.Header>
                <TimeSelector />
            </Panel>
        );
    }
}
