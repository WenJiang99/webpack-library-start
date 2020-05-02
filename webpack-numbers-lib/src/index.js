import _ from 'lodash';
import numberRef from './ref.json';

export function numberToWord(number) {
    return _.reduce(numberRef, (accnum, ref) => ref.num === number ? ref.word : accnum, '')
}

export function wordToNumber(word) {
    return _.reduce(numberRef, (acc, ref) => ref.word === word && word.toLowerCase() ? ref.num : acc, -1)
}
