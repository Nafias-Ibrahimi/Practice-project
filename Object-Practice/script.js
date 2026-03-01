// . Create an object book with title, author, and year. Add a new property pages.

// let book = {
//   title: "Atomic Habits",
//   author: "James Clear",
//   year: 2018,

// };
// book.pages=220;
// console.log(book);

// Write a function that takes a car object and prints brand and year.

// function printCar(car) {
//   console.log("Brand:" + car.brand, "year:" +car.year);
// }
// let car = {
//   brand: "Toyota",
//   year: 2024,
//   model: "camry",
// };

// printCar(car);

// function printCarInfo(car) {
//   return `Brand:, ${car.brand}, year:,${car.year},model:,${car.model}`;
// }
// console.log(
//   printCarInfo({ brand: "Acura Integra", year: "2025", model: "camry" }),
// );


// Create a nested object school with teachers and students. Access one teacher’s subject.


// let school = {
//   name: "Ibrahim Shaheed hight school",
//   address: "barchi",
//   students: {
//     name: "Ali",
//     lName: "Ahmadi",
//     age: 23,
//   },

//   Teacher: {
//     name: "Maryam",
//     lName: "Zafari",
//     salary: 10000,
//     subject:"Math"
//   },
// };
// console.log(school.Teacher.salary);
// console.log(school.name);

// const { Teacher, name } = school;
// console.log(Teacher.subject);
// console.log(school);

// Make a shallow copy and prove how it differs from a deep copy.

// let classroom = {
//   className: "A",
//   teacher: {
//     name: "Sara",
//     subjec: "Math",
//   },
//   students: ["Ali", "Ahmad", "Maryam"],
// };


// let shallowClass = { ...classroom };
// shallowClass.className = "B";
// shallowClass.teacher.subjec = "Physics";
// shallowClass.students.push("Nafisa");
// console.log("Original:", classroom);
// console.log("Shallow copy:", shallowClass);

// let person = {
//   name: "ali",
//   lastNmae:"Ibrahimi",
//   address: {
//     city: "Kabul",
//     country: "Afghanistan",
//   },
// };

// let shallowPerson = { ...person };
// shallowPerson.name = "Reza";

// shallowPerson.address.city = "Herat";
// console.log("Original:", person);
// console.log("ShallowPerson:", shallowPerson);


// Use destructuring to extract values from an object.

// let persons = {
//   Name: "Mahsa",
//   address: {
//     city: "Kabul",
//     country: "Afg",
//   },
// };


// let { Name, address } = persons;

// console.log(Name); 
// console.log(address); 

// let products=[
//   { id:1,  names:"laptop", brand:"lenovo",  price:20000},
//   { id:2,  names:"desktab", brand:"dell",  price:10000},
//   { id:3,  names:"phone", brand:"apple",  price:60000},
// ]
 

// let {names , brand, price}=products[0];
// console.log(`"name:" ${names} ,"brand:" ${brand}`);


// freeze object
// let obj1={b:2};
// Object.freeze(obj1);
// obj1.a=99;
// console.log(obj1);


let person={
  name:"Ahmad",
  age:20
}
Object.freeze(person);

person.age=24;
person.city="Kabul";
console.log(person);

const car={
  brand:"Toyota",
  year:2020
}
Object.freeze(car);
car.brand="corola";
car.year=2026;
console.log(car);

const students={
  name:"Zahra",

};
Object.freeze(students);
students.age=14;
console.log(students);


const phone={
  model:'iphone',
  price:70000
};
Object.freeze(phone);
phone.model='samsung';
phone.price=80000;
console.log(phone);

