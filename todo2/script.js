const toDoArr = [];

const submit = document.querySelector("#submit");
const todoNameInput = document.querySelector("#todo_name_input");
const todoContainer = document.querySelector("#todo_container");
const doingContainer = document.querySelector("#doing_container");
const doneContainer = document.querySelector("#done_container");

submit.addEventListener("click", submitToDo);

function submitToDo() {
  console.log("Det virker");
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox"><h2>${todoNameInput.value}</h2>`;
  todoContainer.appendChild(li);
  li.addEventListener("click", () => {
    if (li.parentElement === todoContainer) {
      todoContainer.removeChild(li);
      doneContainer.appendChild(li);
    } else if (li.parentElement === doneContainer) {
      doneContainer.removeChild(li);
      todoContainer.appendChild(li);
    }
  });
}
