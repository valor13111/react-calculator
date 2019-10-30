import React from 'react';

const actions = (props) => {

    return (
        <div className="container border">
            All the button actions for calculator
            <div className="row">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary" onClick={() => props.addition("+")}>+</button>
                    <button type="button" className="btn btn-primary" onClick={() => props.subtraction("-")}>-</button>
                    <button type="button" className="btn btn-primary" onClick={() => props.multiplication("*")}>*</button>
                    <button type="button" className="btn btn-primary" onClick={() => props.division("/")}>/</button>
                    <button type="button" className="btn btn-primary" onClick={() => props.result("=")}>=</button>
                </div> 
            </div>

            <div className="row">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary" onClick={() => props.updateValue(0)}>0</button>
                    <button type="button" className="btn btn-primary" onClick={() => props.updateValue(1)}>1</button>
                    <button type="button" className="btn btn-primary" onClick={() => props.updateValue(2)}>2</button>
                    <button type="button" className="btn btn-primary" onClick={() => props.updateValue(3)}>3</button>
                </div>
            </div>
            
            <div className="row">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary" onClick={() => props.updateValue(4)}>4</button>
                    <button type="button" className="btn btn-primary" onClick={() => props.updateValue(5)}>5</button>
                    <button type="button" className="btn btn-primary" onClick={() => props.updateValue(6)}>6</button>
                    <button type="button" className="btn btn-primary" onClick={() => props.updateValue(7)}>7</button>
                </div>
            </div>
            
            <div className="row">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary" onClick={() => props.updateValue(8)}>8</button>
                    <button type="button" className="btn btn-primary" onClick={() => props.updateValue(9)}>9</button>
                    <button type="button" className="btn btn-danger" onClick={() => props.clear()}>Clear</button>
                </div>
            </div>
        </div>
    );
    
};

export default actions;