import React from 'react';

import { Slider } from 'antd';

export default class Length extends React.Component {
    render() {
        return (
            <div>
                {`Numbers:
                ${this.props.numbers}
                `}
                <Slider
                    defaultValue={this.props.numbers}
                    value={this.props.numbers}
                    min={0}
                    disabled={this.props.maxLength === 1}
                    max={this.props.maxLength}
                    onChange={value => {
                        if (value >= this.props.maxLength) return;
                        this.props.onChange(value);
                    }}
                />
            </div>
        );
    }
}
