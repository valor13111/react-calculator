import React from 'react';

const history = (props) => (
    <div className="container border m-2">
        {
            props.history.map((expression, i) => {
                return (
                    <li key={i}>{expression}</li>
                );
            })
        }
    </div>
);

export default history;