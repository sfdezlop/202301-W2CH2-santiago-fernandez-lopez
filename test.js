import { strictEquals } from './strictEquals.js';

const strictEqualsTests = [
  { a: 1, b: 1, validResult: true, type: 'Rule', result: null, test: null },
  {
    a: NaN,
    b: NaN,
    validResult: false,
    type: 'Rule Exception',
    result: null,
    test: null,
  },
  {
    a: 0,
    b: -0,
    validResult: true,
    type: 'Rule Exception',
    result: null,
    test: null,
  },
  {
    a: -0,
    b: 0,
    validResult: true,
    type: 'Rule Exception',
    result: null,
    test: null,
  },
  { a: 1, b: '1', validResult: false, type: 'Rule', result: null, test: null },
  {
    a: true,
    b: false,
    validResult: false,
    type: 'Rule',
    result: null,
    test: null,
  },
  {
    a: false,
    b: false,
    validResult: true,
    type: 'Rule',
    result: null,
    test: null,
  },
  {
    a: 'Water',
    b: 'oil',
    validResult: false,
    type: 'Rule',
    result: null,
    test: null,
  },
];

const test = () => {
  for (let i = 0; i < strictEqualsTests.length; i++) {
    Object.is(
      strictEqualsTests[i].validResult,
      strictEquals(strictEqualsTests[i].a, strictEqualsTests[i].b)
    )
      ? (strictEqualsTests[i].test = 0)
      : (strictEqualsTests[i].test = 1);
  }
};

test();
console.table(strictEqualsTests);
