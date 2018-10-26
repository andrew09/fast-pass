import React from 'react';

import { Slider } from 'antd';

export default class Length extends React.Component {
    render() {
        return (
            <div>
                {`Symbols:
                ${this.props.symbols}
                `}
                <Slider
                    defaultValue={this.props.symbols}
                    value={this.props.symbols}
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
