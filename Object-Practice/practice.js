const user={
    name:"Ali",
    age:15,
    email:"ali@gamil.com",
};
console.log(user.name);
console.log(user["age"]);

console.log(`name: ${user.name}, "age:" ${user.age},"email:" ${user.email}`);

let cars={
    brand:"Totyota",
    model:"camry",
    year:2020
};

console.log(cars);



let {brand, model}=cars;
console.log(`"brand:" ${cars.brand} , "model: ${cars.model}`);


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




