"use strict";
// classes
// class User {
//   public email: string;
//   private name: string;
//   constructor(email: string, name: string) {
//     // this is js not ts
//     this.email = email;
//     this.name = name;
//   }
// }
// this is for typescrip
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // this is js not ts
    }
    //   getter
    getAppleEmail() {
        return `apples${this.email}`;
    }
}
const fatihat = new User("djdjdjd", "shhssh n");
// getters and setters
