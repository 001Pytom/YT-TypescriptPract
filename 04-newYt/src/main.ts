// literal types
let myName: "Dave";

let userName: "Dave" | "john" | "aaa";
// with this u cant use any other name

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMSG = (message: any): void => {
  //any function that returns void , means it  wont return anythin, it can console.log but nnot return
  console.log(message);
};

logMSG("hello");

let sub = function (c: number, d: number): number {
  return c - d;
};

// suppose u have lots of maths func, you would want to DRY reapeat codes, so u create a type and use like this
type mathFunc = (a: number, b: number) => number;
let multipy: mathFunc = function (a, b) {
  return a * b;
};

// rest params

const total = (...nums: number[]): number => {
  //array full of num
  return nums.reduce((prev, curr) => prev + curr);
};

// we can also hva e
const total2 = (a: number, ...nums: number[]): number => {
  //array full of num
  return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total2(1, 2, 3, 4, 5));
// never type, u can use like this or when u have infiniate loops
const createErr = (errmsg: string): never => {
  throw new Error(errmsg);
};
//
