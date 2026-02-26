const  addField=document.querySelector('#addField');
const fieldContanier=document.querySelector('#fieldContanier')
// const submirForm=document.querySelector('#submirForm');
 let count=0;
 addField.addEventListener('click' ,()=>{
    count++;
    const input=document.createElement('input');
    input.type="text";
    fieldContanier.appendChild(input);

 })