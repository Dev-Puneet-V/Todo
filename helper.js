const taskElementGenerator = (newData) => {
  const taskText = newData?.text;
  const taskELement = document.createElement("ol");
  taskELement.classList.add("task");
  const taskTextElement = document.createElement("p");
  taskELement.setAttribute("key", newData?.id);
  taskTextElement.innerText = taskText;
  const checkIcon = document.createElement("img");
  checkIcon.setAttribute("width", "40");
  checkIcon.setAttribute("height", "40");
  checkIcon.setAttribute(
    "src",
    newData?.status === 0
      ? "https://img.icons8.com/glyph-neue/64/checkmark.png"
      : "https://img.icons8.com/plasticine/100/filled-trash.png"
  );
  checkIcon.setAttribute("alt", "checkmark");
  taskELement.appendChild(taskTextElement);
  taskELement.appendChild(checkIcon);
  return taskELement;
};
