import capitalize from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

assert.equal(capitalize(''), '');

assert.equal(capitalize('hello'), 'Hello');

assert.equal(capitalize('h-'), 'H-');

console.log('Все тесты пройдены!');
