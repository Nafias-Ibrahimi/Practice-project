const nav=document.querySelector('.nav');
const brand=document.querySelector('.brand');

let img=document.createElement('img');
img.src='/images/image.png';
img.alt="logo";
brand.appendChild(img);

let links=[
    {text:"Home" , url:"/home"},
    {text:"About" , url:"/about"},
    {text:"Contact" , url:"/contact"},
]
 for(let i=0; i<=links.length; i++){
    let li=document.createElement('li');
    let a=document.createElement('a');
    li.className="nav-list";
    a.className="nav-item";

   
    a.textContent=links[i].text;
    a.href=links[i].url;
     li.appendChild(a);
    nav.appendChild(li);
 }



