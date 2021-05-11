import React, { Component } from 'react';
import { connect } from 'react-redux';

import DeveloperBio from './DeveloperBio';
import devActions from '../reducers/devReducers';

class DisplayBios extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        fetch("https://tech-services-1000201953.uc.r.appspot.com/developers")
        .then(response=>response.json())
        .then(devs=>this.props.addDevsToStore(devs))
        .catch(error=>console.log("error:" + error));
    }

    render(){
        return (
            this.props.developers.map((dev, index)=><DeveloperBio developer={dev} key={index} />)
        );
    }
}

export default connect(({developers})=>({
    developers: developers//match state to prop
}),{
    addDevsToStore: devActions.getAllBiosActionCreator
})(DisplayBios);