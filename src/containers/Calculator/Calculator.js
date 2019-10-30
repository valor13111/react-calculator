import React, { Component } from 'react';

import Display from '../../components/Display/Display';
import History from '../../components/History/History';
import Actions from '../../components/Actions/Actions';

const math = require('mathjs');

class Calculator extends Component {
    state = {
        expression: '',
        value: '',
        history: [],
        result: ''
    }

    updateValue = (newValue) => {
        const v = this.state.value.toString() + newValue;

        this.setState({
            value: v
        });
    }

    updateExpression = (operation) => {
        const newExpression = this.state.expression + this.state.value + " " + operation + " ";

        this.setState({
            expression: newExpression,
            value: ''
        });

        console.log("Expression: " + newExpression);
    }

    addition = () => {
        if (this.state.value === '') {
            return;
        }

        this.updateExpression("+");
    }

    subtraction = () => {
        if (this.state.value === '') {
            return;
        }

        this.updateExpression("-");
    }

    multiplication = () => {
        if (this.state.value === '') {
            return;
        }

        this.updateExpression("*");
    }

    division = () => {
        if (this.state.value === '') {
            return;
        }

        this.updateExpression("/");
    }

    getResult = () => {
        if (this.state.value === '') {
            return;
        }

        const newExpression = this.state.expression + this.state.value;
        const newResult = math.evaluate(newExpression);
        const newHistory = [...this.state.history, newExpression + " = " + newResult];

        this.setState({
            value: '',
            history: newHistory,
            expression: '',
            result: newResult
        });

        console.log(newResult);
    }

    clear = () => {
        this.setState({
            expression: '',
            value: '',
            result: ''
        })
    }

    render() {
        return (
            <div className="container border">
                The Calculator
                <Display value={this.state.value} result={this.state.result} expression={this.state.expression}/>
                <History history={this.state.history} />
                <Actions 
                    updateValue={this.updateValue} 
                    result={this.getResult} 
                    updateExpression={this.updateExpression} 
                    addition={this.addition}
                    subtraction={this.subtraction}
                    multiplication={this.multiplication}
                    division={this.division}
                    clear={this.clear}
                />
            </div>
        );
    }
}

export default Calculator;