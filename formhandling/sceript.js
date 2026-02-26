
const addField = document.querySelector('#addField');
const contanier = document.querySelector('#fieldContanier');
const submitBtn = document.querySelector('#submirForm');

let count = 0; 

addField.addEventListener('click', () => {
    count++;

    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = `field ${count}`;
    input.className = "form-field";

    contanier.appendChild(input);
});

submitBtn.addEventListener('click', () => {
    const values = [...document.querySelectorAll('.form-field')]
        .map((field) => field.value);

    console.log("Form Data:", values);
});