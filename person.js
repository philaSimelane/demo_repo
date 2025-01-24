class Person {
  constructor({ name, age, gender, interests }) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  getInterestsStr() {
    if (this.interests.length > 1) {
      let allButLast = this.interests.slice(0, -1).join(", ");
      let last = this.interests[this.interests.length - 1];
      let allInterests = [allButLast, last].join(" and ");
      return `My interests are ${allInterests}`;
    }
    else if (this.interests.length === 1) {
      return `My interest is ${this.interests}`;

    }
    else {
      return `I have no interests`
    }
  }

  hello() {
    return `Hello, my name is ${this.name}, my gender is ${this.gender} and I am ${this.age} years old. ${this.getInterestsStr()}.`
  }
}

module.exports = { Person };
