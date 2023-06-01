const numvers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);

console.log(max);

function MyConstructor() {
  for (var nProp = 0; nProp < arguments.length; nProp++) {
    this["property" + nProp] = arguments[nProp];
  }
}

var myArray = [4, "Hello world!", false];
