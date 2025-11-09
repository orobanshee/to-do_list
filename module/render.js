import {
    listGroup,
} from "./variables.js"

// add new task

function renderTask(text) {
  const newLi = document.createElement("li");
  newLi.classList.add("element-list");

  const newTaskText = document.createElement("a");
  newTaskText.setAttribute("href", "#!");
  newTaskText.classList.add("task-text");
  newTaskText.textContent = text;

  const bntDelete = document.createElement("button");
  bntDelete.classList.add("btn-close");
  bntDelete.setAttribute("aria-label", "Close");

  newLi.appendChild(newTaskText);
  newLi.appendChild(bntDelete);

  listGroup.appendChild(newLi);
}