import React from 'react';

import './Display.css';

const display = (props) => (
    <div className="container border display">
        <div className="row display-item">
            <div className="col">
                {props.expression}
            </div>
        </div>
        <div className="row display-item">
            <div className="col">
                {props.value}
            </div>
        </div>
        <div className="row display-item">
            <div className="col">
                {props.result}
            </div>
        </div>
    </div>
);

export default display;