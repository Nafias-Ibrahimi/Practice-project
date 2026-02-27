let book={
    title:"Atomic Habits",
    author:"James Clear",
    year:2018
}
console.log(book);

function printCar(car){
console.log("Brand:"+ car.brand);

}
    let car={
    brand:"Toyota",
    year:2024,
    model:"camry"
}

printCar(car);

function printCarInfo(car){
    return `Brand:, ${car.brand}, year:,${car.year},model:,${car.model}`;
}
console.log(printCarInfo({brand:"Acura Integra" ,year:"2025" , model:"camry"}));


let school={
    name:"Ali",
    lName:"Ahmadi",
    age:23,
    Teacher:{
        name:"Maryam",
        lName:"Zafari",
        salary:10000,
    }
    
}
console.log(school.Teacher.salary);
console.log(school.name);


const {Teacher ,name}=school;
console.log(Teacher.salary);
console.log(name);

let classroom={
    className:"A",
    teacher:{
        name:"Sara",
        subjec:"Math"
    },
    students:["Ali" ,"Ahmad" ,"Maryam"]
};

let shallowClass={...classroom};
    shallowClass.className="B";
    shallowClass.teacher.subjec="Physics";
    shallowClass.students.push("Nafisa");
    console.log("Original:" ,classroom);
    console.log("Shallow copy:", shallowClass);


let person={
    name:'ali',
    address:{
        city:'Kabul',
        country:'Afghanistan'
    }
};

let shallowPerson={...person};
shallowPerson.name="Reza";

shallowPerson.address.city="Herat";
console.log("Original:", person);
console.log("ShallowPerson:", shallowPerson);



let persons = {
    Name: "Mahsa",
    address: {
         city: "Kabul",
         country: "Afg"
    }
};

// Destructure
let { Name, address } = persons;

console.log(Name);    // Mahsa
console.log(address); // { city: 'Kabul', country: 'Afg' }