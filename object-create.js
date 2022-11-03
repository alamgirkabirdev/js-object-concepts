// 1. using object literal
const student= {name:'Sakib al hasan', job:'cricketer'};

// 2. constructor
const person = new Object();

// 3.
// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.job);

class People{
    constructor(name, age){
        this.name= name;
        this.age = age;
    }
}
const Peop = new People('Manus', 13);
// console.log(Peop);

// function 
function Manus(name){
    this.name= name;
}
const man = new Manus('kader');
console.log(man);