import React from 'react';

import generatePassword from './helpers/generate-password';
import defaultOptions from './helpers/default-options';
import 'antd/dist/antd.css';
import Length from './components/length';
import Symbols from './components/symbols';
import Numbers from './components/numbers';

import Password from './components/password';
import { Container } from './app.styled';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            length: 0,
            numbers: 0,
            symbols: 0,
            password: '',
        };
    }

    componentDidMount() {
        window.addEventListener(
            'copy',
            async () => await navigator.clipboard.writeText(this.state.password)
        );

        window.addEventListener('focus', () => this.setPassword());

        const options =
            JSON.parse(localStorage.getItem('fp-options')) || defaultOptions;
        const { length, numbers, symbols } = options;

        this.setState({ length, numbers, symbols }, this.setPassword);
    }

    componentWillUnmount() {
        window.removeEventListener('copy');
        window.removeEventListener('focus');
    }
    setPassword() {
        this.setState({ password: generatePassword(this.state) });
    }

    onChange(key) {
        return value => {
            this.setState({ [key]: value }, () => {
                const { length, numbers, symbols } = this.state;

                localStorage.setItem(
                    'fp-options',
                    JSON.stringify({ length, numbers, symbols })
                );
                this.setPassword();
            });
        };
    }

    render() {
        return (
            <Container>
                <Password password={this.state.password} />
                <div>
                    <Length
                        minLength={
                            this.state.numbers + this.state.symbols > 8
                                ? this.state.numbers + this.state.symbols
                                : 8
                        }
                        length={this.state.length}
                        onChange={this.onChange('length')}
                    />
                    <Symbols
                        symbols={this.state.symbols}
                        maxLength={this.state.length - this.state.numbers + 1}
                        onChange={this.onChange('symbols')}
                    />
                    <Numbers
                        numbers={this.state.numbers}
                        maxLength={this.state.length - this.state.symbols + 1}
                        onChange={this.onChange('numbers')}
                    />
                </div>
            </Container>
        );
    }
}
