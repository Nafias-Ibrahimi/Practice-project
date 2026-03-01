// const user={
//     name:"Ali",
//     age:15,
//     email:"ali@gamil.com",
// };
// console.log(user.name);
// console.log(user["age"]);

// console.log(`name: ${user.name}, "age:" ${user.age},"email:" ${user.email}`);

// let cars={
//     brand:"Totyota",
//     model:"camry",
//     year:2020
// };

// console.log(cars);



// let {brand, model}=cars;
// console.log(`"brand:" ${cars.brand} , "model: ${cars.model}`);


let persons={
    name:"Maryam",
    age:24,
    isMarried:false,
    hobbies:["reading" , "watching" ,"traveling"],
    address:{city:"kabul", country:"Afghanistan"}

};
console.log(`"name:" ${persons.name} , "age:" ${persons.age} , "isMarried :" ${persons.isMarried}`);

let {hobbies , address}=persons;
console.log(persons.hobbies ,persons.address.country);



let student={};
student.name="Zahra",
student.age=20;

student["grade"]="A";
student["position"]="moster";
console.log(student);

let phones={};
phones.name="iphone";
phones.brand="apple";
phones.price=20000;
phones["company"]="apple";
phones["model"]="iPhone 15";

let {brand , company ,model}=phones;

console.log(phones);
console.log("brand:" ,phones.brand , "price:" ,phones.price, "model:" ,phones.model);

let obj={};
obj["favorite color"]="blue";
console.log(obj["favorite color"]);

let food={
names:["Rice" ,"Pizza" ,"Chicken" ,"Fish" ,"Potato"],
fruites:["Apple" ,"Banana" ,"Grapes"]
};
food["my favorite food is"]="Pizza";
console.log(food["my favorite food is"]);
console.log(food);


let key="score";
student[key]=90;
console.log(student);



let books={title:"chemistry" ,pages:200};
books.pages=260;
books.title="Mathematic";

delete books.pages;
console.log(books);

 let users={
    name:"Sara",
    address:{
        city:"Wardak",
        country:"Afg"
    }
 };
 console.log("name: ", users.name);
 console.log("city:" ,users.address.city,"country:" ,users.address.country);