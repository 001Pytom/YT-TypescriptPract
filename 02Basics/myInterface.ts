interface User {
  // this is special coz of functions
  // first way of del=claring methods
  //   startTrial: () => string;
  //second
  startTrial(): string;
  getCoupon(cuponName: string): number;
}

// re opening of interfacte
interface User {
  githubToken: string;
}
// inheritance, u can use extends so if u want to call a new one, it ca have properties of prev one
interface Admin extends User {}

const hitesh: User = {
  startTrial: () => {
    return "trial startes";
  },
  getCoupon: (name: "fatihat") => {
    return 10;
  },
  //   so here you have to add te other stuf u used in reopining
  githubToken: "jdhjdhj",
};
