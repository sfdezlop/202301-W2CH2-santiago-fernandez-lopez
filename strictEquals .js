// Like a === b
export function strictEquals(a, b) {
  if (Object.is(a, b)) {
    // Same value.
    // Is this NaN?
    if (Object.is(a, NaN)) {
      // We already know a and b are the same, so it's enough to check a.
      // Special case #1.
      return false;
    } else {
      // They are equal!
      return true;
    }
  } else {
    // Different value.
    // Are these 0 and -0?
    if (
      (Object.is(a, 0) && Object.is(b, -0)) ||
      (Object.is(a, -0) && Object.is(b, 0))
    ) {
      // Special case #2.
      return true;
    } else {
      // They are not equal!
      return false;
    }
  }
}

console.log(strictEquals('a','b'));

const functiontests =[
  { a: 1, b:1, result: true, type: "Rule" },
  { a: NaN, b:NaN, result: false, type: "Rule Exception" },
  { a: 0, b:-0, result: true, type: "Rule Exception" },
  { a: -0, b:0, result: true, type: "Rule Exception" },
  { a: 1, b:'1', result: false, type: "Rule" },
  { a: true, b:false, result: false, type: "Rule" },
  { a: false, b:false, result: true, type: "Rule" },
  { a: 'Water', b:'oil', result: false, type: "Rule" }]
