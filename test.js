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
  {
    a: 'other true case',
    b: 'other true case',
    validResult: true,
    type: 'Rule',
    result: null,
    test: null,
  },
  ,
  {
    a: 'other false case',
    b: 'other false case1',
    validResult: false,
    type: 'Rule',
    result: null,
    test: null,
  },
];

const test = () => {
  for (let i = 0; i < strictEqualsTests.length; i++) {
    strictEqualsTests[i].result=strictEquals(strictEqualsTests[i].a, strictEqualsTests[i].b)
    Object.is(strictEqualsTests[i].validResult,strictEqualsTests[i].result)
      ? (strictEqualsTests[i].test = 0)
      : (strictEqualsTests[i].test = 1);
  }
};

test();
console.table(strictEqualsTests);
