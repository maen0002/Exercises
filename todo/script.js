import getRandomNum from "../utils/utils.js";

const toDoArr = [];

const submit = document.querySelector("#submit");
const todoNameInput = document.querySelector("#todo_name_input");
const todoDescInput = document.querySelector("#todo_desc_input");
const todoNumberInput = document.querySelector("#todo_date_input");
const todoContainer = document.querySelector("#todo_container");
const doneContainer = document.querySelector("#done_container");
const container = document.querySelector("#container");

//Random Farve og load local storage herunder

window.addEventListener("load", (event) => {
  // Henter fra local storage og laver det om til et array igen
  let retString = localStorage.getItem("todos");
  let retArray = JSON.parse(retString);
  console.log(retArray);
  toDoArr.push(...retArray);
  writeTodos();

  const randomNum = getRandomNum(3);
  let NewBG;
  if (randomNum === 0) {
    NewBG = "#78cdec";
  } else if (randomNum === 1) {
    NewBG = "#7aec78";
  } else {
    NewBG = "#f08cec";
  }
  console.log(randomNum);
  document.querySelector("header").style.setProperty("background-color", NewBG);
  document.querySelector("#submit").style.cssText = `background-color: ${NewBG}; border-color: ${NewBG}`;
  document.querySelectorAll(".input_section").forEach((sec) => {
    sec.style.setProperty("background-color", NewBG);
  });
});

//To do herunder

submit.addEventListener("click", submitToDo);

//Gemmer hvad der er skrevet i input efter submit trykkes
function submitToDo(ext) {
  const todoObj = {
    name: todoNameInput.value,
    desc: todoDescInput.value,
    numb: todoNumberInput.value,
    id: self.crypto.randomUUID(),
    done: false,
  };
  toDoArr.unshift(todoObj);
  console.log(toDoArr);
  //Laver todoArray om til en string og gemmer i local storage
  let todoArrString = JSON.stringify(toDoArr);
  localStorage.setItem("todos", todoArrString);
  writeTodos();
}

//Skriver to do'en ind i HTML
function writeTodos() {
  todoContainer.innerHTML = ``;
  doneContainer.innerHTML = ``;
  toDoArr.forEach((todoObj) => {
    let isChecked;
    if (todoObj.done === true) {
      isChecked = "checked";
      doneContainer.innerHTML += `<li data-id=${todoObj.id}><h4>${todoObj.name}</h4><p>${todoObj.desc}</p><p>${todoObj.numb}</p> <div class="flex"><input class="checkbox" type="checkbox" name="To do checked" ${isChecked}><button class="remove-btn">Remove</button></div></li>`;
    } else {
      isChecked = "";
      todoContainer.innerHTML += `<li data-id=${todoObj.id}><h4>${todoObj.name}</h4><p>${todoObj.desc}</p><p>${todoObj.numb}</p> <div class="flex"><input class="checkbox" type="checkbox" name="To do checked" ${isChecked}><button class="remove-btn">Remove</button></div></li>`;
    }
  });
  container.querySelectorAll("li").forEach((li) => {
    console.log(li);
    const checkBox = li.querySelector("input");
    checkBox.addEventListener("click", (ext) => {
      ext.preventDefault();
      const correspondingToDoObj = toDoArr.find((toDo) => toDo.id === li.dataset.id);
      correspondingToDoObj.done = !correspondingToDoObj.done;
      console.log(correspondingToDoObj);

      writeTodos();
    });
    const removeBtn = li.querySelector("button");
    removeBtn.addEventListener("click", (ext) => {
      const correspondingToDoObj = toDoArr.find((toDo) => toDo.id === li.dataset.id);
      toDoArr.splice(correspondingToDoObj, 1);
      console.log(correspondingToDoObj);
      writeTodos();
    });
    if (li.parentElement === todoContainer) {
      li.style.cssText = "background-color:rgb(236, 77, 77); padding: 20px; border-radius: 10px;";
    } else if (li.parentElement === doneContainer) {
      li.style.cssText = "background-color:rgb(98, 234, 64); padding: 20px; border-radius: 10px;";
    }
  });
  if (todoContainer.childNodes.length > 0) {
    document.querySelector("#todo_text").textContent = "To Do";
  } else {
    document.querySelector("#todo_text").textContent = "";
  }
  if (doneContainer.childNodes.length > 0) {
    document.querySelector("#done_text").textContent = "Done";
  } else {
    document.querySelector("#done_text").textContent = "";
  }
  //Laver todoArray om til en string og gemmer i local storage
  let todoArrString = JSON.stringify(toDoArr);
  localStorage.setItem("todos", todoArrString);
}
