
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");


addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Oops! Please type something, cutie 💖");
    return;
  }

  const li = document.createElement("li");


  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">🗑️💔🔥</button>
  `;
 // Mark as completed on click
  li.querySelector(".task-text").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  // Add to task list
  taskList.appendChild(li);

 
  // Clear input
  input.value = "";
});
