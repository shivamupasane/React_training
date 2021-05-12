import React, { Component } from 'react';
import { connect } from 'react-redux';

import DeveloperBio from './DeveloperBio';
import devActions from '../reducers/devReducers';
import { getDevelopers } from '../api/developerAPI';

class DisplayBios extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            this.props.developers ? 
            this.props.developers.map((dev, index)=><DeveloperBio developer={dev} key={index} />)
            : <div></div>
        );
    }
}

export default connect(({developers})=>({
    developers: developers//match state to prop
}),{
    //creates a prop and assign action creator to it
    addDevsToStore: devActions.getAllBiosRequestActionCreator
})(DisplayBios);