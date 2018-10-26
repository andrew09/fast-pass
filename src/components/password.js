import React from 'react';
import symbols from '../helpers/symbols';
import numbers from '../helpers/numbers';

import { Main, Character } from './password.styled';

export default class Password extends React.Component {
    buildCharacter(character) {
        return (
            <Character
                isSymbol={symbols.includes(character)}
                isNumber={numbers.includes(parseInt(character))}
            >
                {character}
            </Character>
        );
    }

    render() {
        return (
            <Main
                onClick={() =>
                    window
                        .getSelection()
                        .selectAllChildren(document.getElementById('bla'))
                }
                id="bla"
            >
                {this.props.password.split('').map(this.buildCharacter)}
            </Main>
        );
    }
}
