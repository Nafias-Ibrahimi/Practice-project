const template = document.querySelector("#cardTemplate");
const container = document.querySelector("#cardContanier");

const data = [
  { title: "HTML", desc: "Structure of a website page" ,img:"/images/image.png"},
  { title: "CSS", desc: "Design and styling" },
  { title: "Javascript", desc: "Interactivity and logic" },
];

data.forEach((item) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector(".title").textContent = item.title;
  clone.querySelector(".description").textContent = item.desc;
  clone.querySelector(".img").src=item.img;
  container.appendChild(clone);
});
