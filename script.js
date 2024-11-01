const input = document.getElementById("input");
const addButton = document.getElementById("add-button");
const todoTaskList = document.getElementById("todo-tasks");

addButton.style.opacity = "0.5";
addButton.disabled = true;
addButton.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue?.length == 0) {
    return;
  }
    todoTaskList.appendChild;
});

input.addEventListener("input", () => {
  const inputValue = input.value;
  if (inputValue?.length > 0) {
    addButton.style.opacity = "0.8";
    addButton.disabled = false;
  } else if (inputValue?.length == 0) {
    addButton.style.opacity = "0.5";
    addButton.disabled = true;
  }
});
