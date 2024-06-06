"use strict";
class Coder {
    // add visbility modifiers
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
const Dave = new Coder("Dave", "Rock", 22, "english");
class Webdev extends Coder {
    constructor(sex, music, age, lang, name) {
        super(name, music, age, lang);
        this.sex = sex;
        // this.sex = sex;
    }
}
// generics
const echo = (arg) => arg;
