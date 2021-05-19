import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

function DeveloperBio(props) {

    return (
        <div className="card d-inline-block text-dark">
            <div className="card-body">
                <h3 className="card-title">{props.developer.firstName} {props.developer.lastName}</h3>
                <p className="card-text">
                    <span className="bold">Favorite Language:</span> {props.developer.favoriteLanguage}
                </p>
                <p className="card-text">
                    <span className="bold">Year Started:</span> {props.developer.yearStarted}
                </p>
                <p>
                    <button 
                        className="btn btn-success" 
                        onClick={()=> props.history.push(`/edit/${props.developer.id}`)}>Edit</button>
                </p>
            </div>
        </div>
    );
}
//adding Type Checking with PropTypes
DeveloperBio.propTypes = {
    developer: PropTypes.object
}

export default withRouter(DeveloperBio);