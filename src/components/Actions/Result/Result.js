import React from 'react';

const result = (props) => {

    const handleResult = () => {
        props.updateHistory();
        props.result(props.history);
    };

    return (
        <div>
            <button onClick={handleResult}> {props.operation} </button>
        </div>
    );
};

export default result;