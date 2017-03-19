var countdown = (callback) => {
  setTimeout(callback, 2000)
}

var createMultiplier = (n) => {
  return (mult) => mult = mult * n;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

var multiplier = (value1, value2) => {
  return value1 * value2;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
