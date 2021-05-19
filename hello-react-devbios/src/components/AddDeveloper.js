import React from 'react';
import { withRouter } from 'react-router-dom';

import {postDeveloper} from '../api/developerAPI';
import DeveloperForm from './DeveloperForm';
function AddDeveloper (props) {
   function submitForm(dev) {
        postDeveloper(dev)
        .then(props.history.push('/bios'));
    }

   return (
       <DeveloperForm title="Add New" developer = {{}} submitForm={submitForm}></DeveloperForm>
   )
    }

export default withRouter(AddDeveloper);