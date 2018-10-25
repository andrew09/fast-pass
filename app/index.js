import React from 'react';
import generatePassword from './helpers/generate-password';
import defaultOptions from './helpers/default-options';
import 'antd/dist/antd.css';
import Length from './components/length';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            length: 0,
            numbers: 0,
            symbols: 0,
        };
    }
    componentDidMount() {
        const options =
            JSON.parse(localStorage.getItem('fp-options')) || defaultOptions;
        const { length, numbers, symbols } = options;
        this.setState({ length, numbers, symbols });
    }

    componentDidCatch(err, message) {
        alert(message);
    }

    onChange(val) {
        alert(val);
    }

    render() {
        return (
            <div>
                <div>{generatePassword(this.state)}</div>
                <div>
                    <Length
                        length={this.state.length}
                        onChange={this.onChange}
                    />
                </div>
            </div>
        );
    }
}
