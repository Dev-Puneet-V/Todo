export const taskElementGenerator = (taskText) => {
  <ol class="task">
    <p>Study 5hours</p>
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/glyph-neue/64/checkmark.png"
      alt="checkmark"
    />
  </ol>;
  const taskELement = document.createElement("ol");
  taskELement.classList.add("task");
  const taskTextElement = document.createElement("p");
    taskTextElement.innerText = taskText;
    const checkIcon = 
};
