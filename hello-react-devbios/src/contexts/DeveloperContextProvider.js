import React, {useState} from 'react';
import AppContext from '.';

const DeveloperContextProvider = ({children}) => {
    const [developers, setDevelopers] = useState();
    const context = {
        developers, 
        setDevelopers
    }
    return (
        <AppContext.Provider value ={context}>
            {children}
        </AppContext.Provider>
    )
}
export default DeveloperContextProvider;