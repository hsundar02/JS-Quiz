// 3) Identify all of the variables, object property names, primitive values, and objects shown in the following code

function hello(greeting, name) {
    return greeting + ' ' + name;
}

function xyzzy() {
    return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

// Variables:

//     howdy
//     foo
// Function:

//     hello(greeting, name)
// Objects:

//     { a: 1, b: 2, c: [3, 4, 5], d: {} }
// Primitive values:

//     "Hi"
//     "Grace"
// Object property names:

//     a
//     b
//     c
//     d