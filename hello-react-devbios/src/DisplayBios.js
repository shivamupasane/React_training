import React, { Component } from 'react';
import DeveloperBio from './DeveloperBio';

function DisplayBios(props) {
    
       return (
           // use index if id is not there
           //this.state.developers.map((dev, index) => <DeveloperBio developer = {dev} key = {index}/>)
          props.developers.map(dev => <DeveloperBio developer = {dev} key = {dev.id}/>)
        )
}
export default DisplayBios