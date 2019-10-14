//typeof operator is used to find data type of a variable

//Number
console.log(typeof(1 + 1));

//String
console.log(typeof('sky'));

console.log(('blue' + 1 + 6));
console.log(typeof('cat' + 1 + 6));

console.log((1 + 2 + 'blue'));
console.log(typeof(1 + 2 + 'bird'));

//boolean
console.log(true);
console.log(typeof(true));

console.log(false);
console.log(typeof(false));

//null
var value = null;
console.log(value);
console.log(typeof(value));

//undefined
var number;
console.log(number);
console.log(typeof(number));

//object
let details = {name: 'Ramanujam Gond', age: 27, location: 'Bhubaneswar', programming: true};
console.log(details);
console.log(typeof(details));

console.log(details.name);
console.log(details.age);
console.log(details.location);
console.log(details.programming);

//Symbol
let name = Symbol('name');
console.log(name);
console.log(typeof(name));