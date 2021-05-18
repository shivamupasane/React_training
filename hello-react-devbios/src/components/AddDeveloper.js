import React, { useEffect, useState} from 'react';
import Developer from '../models/Developer';
import { withRouter } from 'react-router-dom';

import {postDeveloper} from '../api/developerAPI';
function AddDeveloper (props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [favoriteLanguage, setFavoriteLanguage] = useState('');
    const [yearStarted, setYearStarted] = useState('');
    const [isDirtyForm, setIsDirtyForm] = useState('');
    const [isValidForm, setIsValidForm] = useState('');


    useEffect(() => {
        let firstNameValid = firstName ? true : false;
        let lastNameValid = lastName ? true : false;
        let favoriteLanguageValid = favoriteLanguage ? true : false;
        let yearStartedValid = !isNaN(yearStarted) && yearStarted;
    
        let isValid = firstNameValid && lastNameValid && favoriteLanguageValid && yearStartedValid;
        let isDirty = firstNameValid || lastNameValid || favoriteLanguageValid || yearStartedValid;
setIsDirtyForm(isDirty);
setIsValidForm(isValid);      
    }, [firstName, lastName, favoriteLanguage, yearStarted])

    function handleSubmit(event) {
        event.preventDefault();

        if(!isValidForm)
            return;
        

        let dev = new Developer(
            null,
            firstName,
            lastName,
            favoriteLanguage,
            yearStarted
        );
        postDeveloper(dev);
        props.history.push("/bios");
    }

        return (
            <div className="container">
                <h1>Add Developer Bio</h1>
                <div className="row">
                    <div className="col-mid-6">
                        <form id="devForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" className="form-control" onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" className="form-control" onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="favoriteLanguage">Favorite Language</label>
                                <input type="text" name="favoriteLanguage"  className="form-control" onChange={(e) => setFavoriteLanguage(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="yearStarted">Year Started</label>
                                <input type="text" name="yearStarted"  className="form-control" onChange={(e) => setYearStarted(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <button type="submit" disabled={!isValidForm} className="btn btn-success" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                {
                    (!isValidForm && isDirtyForm)
                    ?
                        <div id="errorMessage"  style={{fontSize:'12px',color:'red'}}>All fields must be filled out</div>
                    :
                        <div id="errorMessage"></div>
                }
            </div>
        );
    }

export default withRouter(AddDeveloper);