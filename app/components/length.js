import React from 'react';

import { Slider } from 'antd';

export default class Length extends React.Component {
    render() {
        return (
            <div>
                <p>Length</p>
                <Slider
                    min={8}
                    max={30}
                    onChange={value => console.log('sliding', value)}
                    onAfterChange={value => console.log('complete', value)}
                />
            </div>
        );
    }
}
