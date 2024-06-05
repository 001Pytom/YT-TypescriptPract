let score: number | string | boolean = 33;
// makes u decleare multiple types

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let faatihat: User | Admin = { name: "faatihat", id: 88 };

// function getDbId(id: number | string) {
//     // making some api calls for example
//   console.log(`Db id is: ${id}`);
// }

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id + 2;
  }
}

// array
const data: (string | number | boolean)[] = [];
// literal assignment
let pi: 3.142;
pi = 3.142; //so it has to be the same num
