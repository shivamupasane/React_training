import React from 'react';

function DeveloperBio(props) {
    return (
        <div className="card d-inline-block text-dark">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    <span className="font-weight-bold">Favorite Language:</span> Javascript
                </p>
                <p className="card-text">
                    <span className="font-weight-bold">Year Started:</span> 2017
                </p>
            </div>
        </div>
    )
}

export default DeveloperBio
