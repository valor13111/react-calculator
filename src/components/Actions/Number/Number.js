import React from 'react';

import './Number.css';

const number = (props) => {
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={() => props.updateValue(props.number)}>{props.number}</button>
        </div>
    );
};

export default number;