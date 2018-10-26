import allowedSymbols from './symbols';
import allowedLetters from './letters';
import allowedNumbers from './numbers';

import getRandomArrayElement from './get-random-array-element';

const generatePassword = options => {
    const pass = [];
    let addedSymbols = 0;
    let addedNumbers = 0;
    const { length, numbers, symbols } = options;

    for (let i = 0; i < length; i++) {
        if (addedSymbols < symbols) {
            pass.push(getRandomArrayElement(allowedSymbols));

            addedSymbols = addedSymbols + 1;
        } else if (addedNumbers < numbers) {
            pass.push(getRandomArrayElement(allowedNumbers));

            addedNumbers = addedNumbers + 1;
        } else {
            pass.push(getRandomArrayElement(allowedLetters));
        }
    }

    return pass.sort(() => Math.floor(Math.random() * 3) - 1).join('');
};

export default generatePassword;
