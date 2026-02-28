// const h1=document.querySelector("#title");
// localStorage.setItem("firstName","Ali");

// const firstName=localStorage.getItem("firstName");
// firstName ? h1.innerText=`welcome ${firstName}` : h1.innerText="nobody to welcome";


// localStorage.setItem("Name","Ali");
// let name=localStorage.getItem("name");
// console.log(name);

const app = document.querySelector('#app');

// Message area
let msg = document.createElement("p");
app.appendChild(msg);

// --- Register Section ---
let rTitle = document.createElement("h2");
rTitle.innerText = "Register";
app.appendChild(rTitle);

let rUser = document.createElement("input");
rUser.placeholder = "username";
app.appendChild(rUser);

let rPass = document.createElement("input");
rPass.placeholder = "password";
rPass.type = "password"; // hide password
app.appendChild(rPass);

let rBtn = document.createElement("button");
rBtn.innerText = "Register";
app.appendChild(rBtn);

app.appendChild(document.createElement("hr"));

// --- Login Section ---
let lTitle = document.createElement("h2");
lTitle.innerText = "Login";
app.appendChild(lTitle);

let lUser = document.createElement("input");
lUser.placeholder = "username";
app.appendChild(lUser);

let lPass = document.createElement("input");
lPass.placeholder = "password";
lPass.type = "password";
app.appendChild(lPass);

let lBtn = document.createElement("button");
lBtn.innerText = "Login";
app.appendChild(lBtn);

// --- LocalStorage Users ---
let users = JSON.parse(localStorage.getItem("users")) || [];

// Register Function
rBtn.onclick = function () {
  let username = rUser.value.trim();
  let password = rPass.value.trim();

  if (!username || !password) {
    msg.innerText = "Fill fields";
    return;
  }

  let exist = users.find(u => u.username === username);
  if (exist) {
    msg.innerText = "User exists ❌";
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  msg.innerText = "Registered ✔";
};

// Login Function
lBtn.onclick = function () {
  let username = lUser.value.trim();
  let password = lPass.value.trim();

  let user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    msg.innerText = "Login success ✅";
    localStorage.setItem("login", username);
  } else {
    msg.innerText = "Wrong ❌";
  }
};




