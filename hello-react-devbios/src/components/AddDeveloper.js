import React, { useEffect, useState} from 'react';
import Developer from '../models/Developer';
import { withRouter } from 'react-router-dom';

import {postDeveloper} from '../api/developerAPI';
import DeveloperForm from './DeveloperForm';
function AddDeveloper (props) {
   function submitForm(dev) {
        postDeveloper(dev);
        props.history.push('/bios');
    }

   return (
       <DeveloperForm title="Add New" developer = {} submitForm={submitForm}></DeveloperForm>
   )
    }

export default withRouter(AddDeveloper);