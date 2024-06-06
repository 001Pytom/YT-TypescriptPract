"use strict";
// literal types
let myName;
let userName;
// with this u cant use any other name
// functions
const add = (a, b) => {
    return a + b;
};
const logMSG = (message) => {
    //any function that returns void , means it  wont return anythin, it can console.log but nnot return
    console.log(message);
};
logMSG("hello");
let sub = function (c, d) {
    return c - d;
};
let multipy = function (a, b) {
    return a * b;
};
// rest params
const total = (...nums) => {
    //array full of num
    return nums.reduce((prev, curr) => prev + curr);
};
// we can also hva e
const total2 = (a, ...nums) => {
    //array full of num
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total2(1, 2, 3, 4, 5));
// never type, u can use like this or when u have infiniate loops
const createErr = (errmsg) => {
    throw new Error(errmsg);
};
//
