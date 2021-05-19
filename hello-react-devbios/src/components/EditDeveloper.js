import React, { useContext, useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import DeveloperForm from './DeveloperForm';
import AppContext from '../contexts';
import { putDeveloper } from '../api/developerAPI';
function EditDeveloper(props) {
    const {id} = useParams();
    const {developers} = useContext(AppContext);
    const {developer, setDeveloper} = useState();
    useEffect(() => {
        developers ? 
       ( 
            console.log("developers", developers, developers.find(dev => dev.id === id))
            //  setDeveloper(developers.find(dev => dev.id === id))
        )
        : props.history.push("/bios")
    }, [id, developers. setDeveloper]);
    const submitForm = (dev) => {
        putDeveloper(dev)
        .then(props.history.push("/bios"));
    }
    return (
        <DeveloperForm title="Edit" developer = {developer} submitForm={submitForm}></DeveloperForm>
    )
}

export default withRouter(EditDeveloper)
