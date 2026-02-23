// const contanier = document.getElementsByClassName('container')[1];
// contanier.innerHTML = "hello world";

// const container=document.getElementById('container');
// container.innerHTML="Hello";

// const container=document.querySelector('.container').textContent="Hello second";
const container=document.querySelector('#container');

// let divs="";
// for(let i=1; i<=4; i++){
//     divs +=`<div class="box">box ${i}</div>`;
// }
// container.innerHTML=divs;

for(let i=1; i<=4; i++){
    const div=document.createElement('div');
    div.className="box";
    div.textContent=`Box ${i}`;
    container.appendChild(div);


}
