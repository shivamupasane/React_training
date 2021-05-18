import React, {useContext, useEffect } from 'react';
import { getDevelopers } from '../api/developerAPI';
import AppContext from '../contexts';

import DeveloperBio from './DeveloperBio';

function DisplayBios() {
    const {developers, setDevelopers} = useContext(AppContext);

    useEffect(() => {
        getDevelopers()
        .then(devs => setDevelopers(devs))
        .catch(error => console.log("error", error));
    }, [setDevelopers])
        return (
            developers ? 
            developers.map((dev, index)=><DeveloperBio developer={dev} key={index} />)
            : <div></div>
        );
}

export default DisplayBios;