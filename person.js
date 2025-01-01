class Person
{
    static name;
    static age;
    static gender;
    static interests = [];

    constructor(name, age, gender, interests)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    
    //myInt = addInt();
   
    hello(){
        if (this.interests.length > 1){
           let allButLast = this.interests.slice(0,-1).join(", ");
           let last = this.interests[this.interests.length - 1];
           let listInterests = [allButLast, last].sort().join(" and ");
        return "Hello, my name is " + this.name + " my gender is " + this.gender + " and I am " + this.age + " years old. My interests are " + listInterests;
        }
       else if (this.interests.length === 1){
           return "Hello, my name is " + this.name + " my gender is " + this.gender + " and I am " + this.age + " years old. My interest is " + this.interests
       }
       if (this.interests.length === 0){
         return "I have no Interests"
       }
    }
}


//let person = new Person('Ryan', 30, 'male',['being a hardarse', 'agile', 'ssd hard drives']);
//let person = new Person('Ryan', 30, 'male',['tea','cake']);
//let person = new Person('Ryan', 30, 'male',['puppies']);
let person = new Person('Ryan', 30, 'male',[]);


let greeting = person.hello();
console.log(greeting)
// put interests length test inside hello function and call fu
// to do add if length === 0
// make code legible to read
// use tempalate literals to output strings
module.exports = { Person };