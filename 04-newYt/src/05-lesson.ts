type One = string;
type Two = string | number;
type three = "hello";

// concert to more or less specific

let a: One = "hello";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + b + c;
};
// assertion
let myVal: string = addOrConcat(2, 2, "concat") as string;

// DOM
const img = document.querySelector("#img") as HTMLImageElement;
// now u can acess the properties
