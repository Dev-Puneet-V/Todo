const input = document.getElementById("input");
const addButton = document.getElementById("add-button");
const todoTaskList = document.getElementById("todo-tasks");
const completedTaskList = document.getElementById("completed-tasks");
const todoTasksContainer = document.querySelector("#todo-tasks");
const completedTaskContainer = document.getElementById("completed-tasks");

let data = JSON.parse(localStorage.getItem("data")) || [];

addButton.style.opacity = "0.5";
addButton.disabled = true;

function saveToLocalStorage() {
  localStorage.setItem("data", JSON.stringify(data));
}

addButton.addEventListener("click", () => {
  const inputValue = input.value;
  if (!inputValue?.length) return;

  const newData = {
    id: Date.now(),
    text: inputValue,
    status: 0,
  };

  data.push(newData);
  saveToLocalStorage();

  todoTaskList.appendChild(taskElementGenerator(newData));
  input.value = "";
});

input.addEventListener("input", () => {
  const inputValue = input.value;
  addButton.style.opacity = inputValue.length > 0 ? "0.8" : "0.5";
  addButton.disabled = inputValue.length === 0;
});

todoTasksContainer.addEventListener("click", (event) => {
  if (event.target.matches(".task img")) {
    const taskElement = event.target.closest(".task");
    const taskText = taskElement.querySelector("p").innerText;
    const id = taskElement.getAttribute("key");

    data = data.filter((task) => task.id.toString() !== id);

    const newData = { id, text: taskText, status: 1 };
    data.push(newData);
    saveToLocalStorage();

    taskElement.remove();
    completedTaskList.appendChild(taskElementGenerator(newData));
  }
});

completedTaskContainer.addEventListener("click", (event) => {
  if (event.target.matches(".task img")) {
    const taskElement = event.target.closest(".task");
    const id = taskElement.getAttribute("key");

    data = data.filter((task) => task.id.toString() !== id);
    saveToLocalStorage();

    taskElement.remove();
  }
});

(() => {
  data.forEach((task) => {
    const taskNode =
      task.status === 0
        ? todoTaskList.appendChild(taskElementGenerator(task))
        : completedTaskList.appendChild(taskElementGenerator(task));
  });
})();
