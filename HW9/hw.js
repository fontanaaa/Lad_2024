const header = document.createElement("header");
const container = document.createElement("section");
const input = document.createElement("input");
const list = document.createElement("ul");
const item1 = document.createElement("li");
const item2 = document.createElement("li");
const button = document.createElement("button");
const footer = document.createElement("footer");

const h1 = document.querySelector("h1");

document.body.style.backgroundColor = "#ccccff";
document.body.style.margin = "0"
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.minHeight = "100vh";

header.innerText = "Header";

header.style.backgroundColor = "#ff66ff";
header.style.height = "100px";
header.style.textAlign = "center";
header.style.fontSize = "30px";

container.style.flexGrow = "1";
container.style.paddingLeft = "40px";

footer.innerText = "Footer";

footer.style.height= "100px";
footer.style.backgroundColor = "#ff66ff";
footer.style.textAlign = "center";
footer.style.fontSize = "30px";

header.classList.add("header");
container.classList.add("container");

h1.innerText = "ToDo";
list.innerText = "ToDo List";
item1.innerText = "todo1";
item2.innerText = "todo2";
button.innerText = "Add to list";

document.body.append(header);
document.body.append(container);
container.append(h1);
container.append(input);
container.append(button);
container.append(list);
list.append(item1);
list.append(item2);
document.body.append(footer);


let inputValue = "";

input.addEventListener("input", (event) => {
  inputValue = event.target.value;
});

const resetInput = () => {
  input.value = "";
  inputValue = "";
};

// Изменил фунцкию создания, на создание и удаление

const createAndRemoveToDo = (todo) => {
  if (!todo) return;
  const item = document.createElement("li");
  const remove = document.createElement("button");
  remove.className = "remove-button";
  item.innerText = todo;
  remove.innerText = "Remove item";
  list.append(item);
  item.append(remove);
  remove.addEventListener("click", function(e) {
    if(e.target.classList.contains("remove-button")) {
      const toDoItem = e.target.parentNode;
      toDoItem.remove();
    }
  })
};

button.addEventListener("click", () => {
  createAndRemoveToDo(inputValue);
  resetInput();
});

const handlerInput = (event) => {
  event.target.value = "";
  console.log("blur");
};

input.addEventListener("focus", (event) => console.log(event));
input.addEventListener("blur", (event) => handlerInput(event));

input.addEventListener("input", (event) => console.log(event.target.value));

const buttonWrapper = document.querySelector(".button-wrapper");
const buttonBubble = document.querySelector(".button");

const form = document.querySelector("form");
form.addEventListener("submit", (event) => event.preventDefault());

buttonBubble.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("button", e);
});
buttonWrapper.addEventListener("click", (e) => console.log("wrapper", e));