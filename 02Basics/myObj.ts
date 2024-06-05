// // type allias
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User) {
//   return user;
// }

// createUser({ name: "sjjdj", email: "dkdkd", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  //   to make something optional, so u dont need to pass ass argument use ?
  reditcardDetails?: number;
};
let myUser: User = {
  _id: "1222",
  name: "f",
  email: "jdhd@.com",
  isActive: false,
};

myUser.email = "sjjsjs";
// myUser._id = u cant do this , coz its just readonly
