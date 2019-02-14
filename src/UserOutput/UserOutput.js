/*jshint esversion: 6 */

import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Your current username:</p>
            <p>{props.currentName}</p>
        </div>
    )
};

export default userOutput;
