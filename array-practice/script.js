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
let sum=filtered.reduce((acc ,curr) => acc + curr , 0);
console.log(`"filtered:" ${filtered}`);
console.log("sum :" , sum);

let fruits=["Apple" ,"banana" ,"kiwi" ,"mango" ,"pear"];
console.log(fruits);
 let upperFruits=fruits.map(fruit => fruit.toUpperCase());
 console.log("Uppercase fruits:" ,upperFruits);


// 3. Write code to:
// o Sort an array of names alphabetically.
// o Reverse the result

let names=["Reza" ,"Ali" ,"Sara" ,"Nafisa" ,"Ahmad"];
console.log("names:" ,names);

let sortedName=names.sort();
console.log(sortedName);
names.slice().sort();
console.log("sorted names:",sortedName);

let reversedName=sortedName.slice().reverse();

console.log("Reversed names:" ,reversedName);



// 4. Create an array of student objects (name, score).
// o Use find() to get the first student with score > 80.
// o Use every() to check if all have scores > 50.

let students=[
    {name:"Ali" , score:70},
    {name:"Zahra" , score:45},
    {name:"Ahamd" , score:80},
    {name:"Maryam" , score:90},
];
let topStudent=students.find(student =>student.score >80);
console.log("First student with score > 80:" , topStudent);

let allPassed=students.every(student => student.score >50);
console.log(`"Do all students have score> 50:" ${allPassed}`);

let numbers=[24, 90, 80 , 50 , 70 ,100 ,2];
console.log(numbers);

console.log("numbers sorted :", numbers.sort((a , b) => a - b));

let firstName=numbers.find(num =>num > 80);
console.log(`"first number: ${firstName}`);



let allNumber=numbers.every(num => num > 80);
console.log("allNumbers:" ,allNumber);


// 5. Combine two arrays using spread syntax, then destructure the first two elements

let fruit_arr=['apple' ,'banana' ,'kiwi'];
let vegetables=["carrot" , "tomato" ,"spinach"];
let combined=[...fruit_arr , ...vegetables];
console.log("conbined array:", combined);

let {first , second, ... rest}=combined;
console.log("first element :", first);
console.log("second element:" ,second);
console.log("Rest of array:" ,rest);


// o Write a function that receives any array of numbers and returns the average using reduce().


function average(numbers){
    if(numbers.length === 0)
        return 0;

    let sum = numbers.reduce((acc, curr) => acc + curr, 0);

    return sum / numbers.length;
}

let num1 = [10, 20, 30, 40, 50];

console.log("Average:", average(num1));

