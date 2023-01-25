export function strictEquals(a, b) {
  const zeroExceptionsToTheRule = [0, -0];
  let result;
  if (Number.isNaN(a) && Number.isNaN(b)) {
    result = false;
  } else {
    if (
      zeroExceptionsToTheRule.indexOf(a) > -1 &&
      zeroExceptionsToTheRule.indexOf(b) > -1
    ) {
      result = true;
    } else {
      result = Object.is(a, b);
    }
  }
  return result;
}
