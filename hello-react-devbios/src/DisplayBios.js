import React, { Component } from 'react';
import Developer from './Developer';
import DeveloperBio from './DeveloperBio';

export default class DisplayBios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            developers: [
                new Developer(1, "Shivam", "Upasane", "Javascript", 2017),
                new Developer(1, "Bill", "Gates", "BASIC", 1965)
            ]
        }
    }
    render() {
        return (
           this.state.developers.map(dev => <DeveloperBio developer = {dev} key = {dev.id}/>)
        )
    }
}