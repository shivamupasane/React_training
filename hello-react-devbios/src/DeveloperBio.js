import React from 'react';

function DeveloperBio(props) {
    return (
        <div className="card d-inline-block text-dark">
            <div className="card-body">
                <h5 className="card-title">{props.developer.firstName} {props.developer.lastName}</h5>
                <p className="card-text">
                    <span className="font-weight-bold">Favorite Dev Language:</span> {props.developer.favoriteLanguage}
                </p>
                <p className="card-text">
                    <span className="font-weight-bold">Year Started:</span> {props.developer.yearStarted}7
                </p>
            </div>
        </div>
    )
}

export default DeveloperBio
