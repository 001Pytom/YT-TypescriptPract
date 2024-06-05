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
  constructor(public email: string, private name: string) {
    // this is js not ts
  }
  //   getter
  getAppleEmail(): string {
    return `apples${this.email}`;
  }
  //   setter
}

const fatihat = new User("djdjdjd", "shhssh n");
// getters and setters
