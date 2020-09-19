/*
Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

*/

//Solution Two
function bouncer(arr) {                           //1
  return arr.filter(Boolean);                     //2
}

console.log(bouncer([7, "ate", "", false, 9]));




//Notes
/*

//1
A function that takes in one argument - an Array. 

//2
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callback test are simply skipped, and are not included in the new array.

Source - [https://devdocs.io/javascript/global_objects/array/filter];

JavaScript Boolean data type can store one of two values, true or false.

Boolean objects can be created using new keyword. e.g. var YES = new Boolean(true);

JavaScript treats an empty string (""), 0, undefined and null as false. Everything else is true.

Boolean methods are used to perform different tasks on Boolean values.

Source - [https://www.tutorialsteacher.com/javascript/javascript-boolean]


_______
In JavaScript, there is a specialist list of following 7 values, which are called falsy values — they all evaluate to false in conditionals:
the number 0.
the BigInt 0n.
the keyword null.
the keyword undefined.
the boolean false.
the number NaN.
the empty string "" (equivalent to '' or `` )

Source - [https://medium.com/coding-at-dawn/what-are-falsy-values-in-javascript-ca0faa34feb4]
_______

_______
The value passed as the first parameter is converted to a boolean value, if necessary. If the value is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false. All other values, including any object, an empty array ([]), or the string "false", create an object with an initial value of true.

Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object.

Any object of which the value is not undefined or null, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement. For example, the condition in the following if statement evaluates to true: 

Source - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean]
_______

As seen above the filter method will extract a value which evaluates to true. 

By passing in the Boolean object as is it is evaluated as a function (a function is also a type of object). Therefore, the filter method will only extract truthy values to the new array. The falsy values mentioned above will be excluded 



*/

