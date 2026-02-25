// const nav=document.querySelector('.nav');
// const brand=document.querySelector('.brand');

// let img=document.createElement('img');
// img.src='/images/image.png';
// img.alt="logo";
// brand.style.background='var(--color-4)';
// brand.appendChild(img);

// let links=[
//     {text:"Home" , url:"/home"},
//     {text:"About" , url:"/about"},
//     {text:"Contact" , url:"/contact"},
// ]
//  for(let i=0; i<=links.length; i++){
//     let li=document.createElement('li');
//     let a=document.createElement('a');
//     li.className="nav-list";
//     a.className="nav-item";

   
//     a.textContent=links[i].text;
//     a.href=links[i].url;
//      li.appendChild(a);
//     nav.appendChild(li);
//  }

const form = document.querySelector('#signup');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    console.log(username);
    console.log(email);
});

