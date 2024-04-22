 // DOM 

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.send();
 

// console.log(document.body)
// Устаревшие методы
// const list = document.getElementById("list");
// console.log(list);
// const item = document.getElementsByClassName("item");
// console.log([...item]);

// Актуальные методы

// const item = document.querySelector(".item")
// const items = document.querySelectorAll(".item")

// console.log(item);
// console.log(items);


// const h1 = document.querySelector("h1");
// h1.innerHTML = "New <span>DOM</span>";
// // h1.outerHTML = "New <span>DOM</span>";
// // h1.textContent = "New <span>DOM</span>";

// h1.style.backgroundColor = "grey";
// // h1.className = "title";

// // h1.addEventListener('click', () => {
// //     h1.classList.toggle("title-toogle")
// // })

// const info = document.createElement("div");
// info.classList.add("title");
// info.innerText= "Information";

// // document.body.prepend(info);
// h1.after(info);


// const header = document.createElement("header");
// const h1 = document.querySelector("h1");
// const container = document.createElement("div");
// const input = document.createElement("input");
// const ul = document.createElement("ul");
// const button = document.createElement("button")
// const li = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");

// h1.innerText = "ToDo";
// li.innerText = "1";
// li2.innerText = "2";
// li3.innerText = "3";
// list.innerText = "ToDo List";

// document.body.append(header);
// document.body.append(container);
// container.append(h1);
// container.append(input);
// container.append(ul);
// ul.append(li);
// ul.append(li2);
// ul.append(li3);
// container.append(button);

// const form = document.querySelector("form");
// form.addEventListener("submit",(e) => e.preventDefault());
