import React from 'react';

const operation = (props) => {

    const handleOperation = () => {
        props.updateValue(props.operation);
    };

    return(
        <div>
            <button type="button" className="btn btn-info" onClick={handleOperation}> {props.operation} </button>
        </div>
    );
};

export default operation;