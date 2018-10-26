import React from 'react';

import { Slider } from 'antd';

export default class Length extends React.Component {
    render() {
        return (
            <div>
                {`Length:
                ${this.props.length}
                `}
                <Slider
                    defaultValue={this.props.length}
                    value={this.props.length}
                    min={this.props.minLength}
                    max={24}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}
