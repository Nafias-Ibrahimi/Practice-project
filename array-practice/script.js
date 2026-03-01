let fruite=["Apple" ,"banana","mango"];
console.log(fruite[0]);

let mixed=["Ali", 25 , true , {city:"Kabul"}];
console.log(mixed);

console.log(mixed[3]);

let colors=new Array("red" ,"green" ,"blue");
console.log(colors);
colors.push("yellow");
console.log(colors);


let a=new Array(3);
console.log(a);

let empty=[];
empty[0]="first";
console.log(empty);



// Practice Exercises
// 1. Create an array of your five favorite foods.
// o Add one to the beginning and one to the end.
// o Remove the second item.


let favoriteFood=["Bolani","Pizza" ,"Ashak" ,"qabili palaw"];

console.log(favoriteFood.push("Mantu"));
console.log(favoriteFood.unshift("Korma"));
console.log(favoriteFood.splice(1,1));

console.log(favoriteFood);
let newfood=favoriteFood.filter((item ,index) => index !==1);
console.log(newfood);


let items=["phone", "Watch" ,"laptop" ,"tablet"];
console.log(items);
let newTtems = items.filter(item => item !=="Watch");
console.log(newTtems);


// 2. Given let nums = [1,2,3,4,5];
// o Use map() to square all numbers.
// o Use filter() to get numbers > 10.
// o Use reduce() to find their sum.

let nums=[1,2,3,4,5,6];
let square=nums.map(num => num * num);
console.log("squar:" ,square);

let filtered=square.filter(num => num >10);
let sum=filtered.reduce((acc ,curr) => acc +curr , 0);
console.log(`"filtered:" ${filtered}`);





