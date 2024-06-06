"use strict";
// concert to more or less specific
let a = "hello";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + b + c;
};
// assertion
let myVal = addOrConcat(2, 2, "concat");
// DOM
const img = document.querySelector("#img");
// now u can acess the properties
