
// const addField = document.querySelector('#addField');
// const contanier = document.querySelector('#fieldContanier');
// const submitBtn = document.querySelector('#submirForm');

// let count = 0; 

// addField.addEventListener('click', () => {
//     count++;

//     const input = document.createElement('input');
//     input.type = "text";
//     input.placeholder = `field ${count}`;
//     input.className = "form-field";

//     contanier.appendChild(input);
// });

// // submitBtn.addEventListener('click', () => {
// //     const values = [...document.querySelectorAll('.form-field')]
// //         .map((field) => field.value);

// //     console.log("Form Data:", values);
// // });
// submitBtn.addEventListener('click', () => {
//     const fields = document.querySelectorAll('.form-field');
//     let valid = true;

//     fields.forEach((field) => {
//         if (field.value.trim() === "") {
//             field.style.border = "2px solid red";
//             valid = false;
//         } else {
//             field.style.border = "2px solid green";
//         }
//     });

//     if (valid) alert("All fields valid!");
// });

// basic Fetch Exmaple

// document.getElementById('fetchBtn').addEventListener('click' ,()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response)=>response.json())
//     .then((data)=> console.log("Fetch Post:",data))
//     .then((data)=> document.writeln("Fetch Post:",data))
//     .catch((err)=>console.log("Error:" ,err))

// })

const form = document.querySelector('#Signpform');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        username: form.username.value,
        email: form.email.value,
    };

    try {
        const res = await fetch('/api/register', {
            method: "POST",
            
            body: JSON.stringify(formData)
        });

        const result = await res.json();
        console.log("Response:", result);

    } catch (error) {
        console.error('Submission Error:', error);
    }
});
