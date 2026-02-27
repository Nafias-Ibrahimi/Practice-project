const searchInput=document.querySelector("#searchInput");
const ListCourse=document.querySelectorAll('#courselist li');

searchInput.addEventListener('input' , (e)=>{
    const term=e.target.value.toLowerCase();
    console.log(term);
})