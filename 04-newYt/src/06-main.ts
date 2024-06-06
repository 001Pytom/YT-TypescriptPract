class Coder {
  // add visbility modifiers
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string
  ) {}
}
const Dave = new Coder("Dave", "Rock", 22, "english");

class Webdev extends Coder {
  constructor(
    public sex: string,
    music: string,
    age: number,
    lang: string,
    name: string
  ) {
    super(name, music, age, lang);
    // this.sex = sex;
  }
}

// index signatures
interface TranscationObj {
  [index: string]: number;
  //   all kesy will be string and values will be numbers
}

// generics
const echo = <T>(arg: T): T => arg;
 