function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const taskList = document.getElementById("taskList");
  
    // Create task item
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
  
    // Task text
    const span = document.createElement("span");
    span.className = "task-text";
    span.innerText = taskText;
    span.onclick = () => {
      span.classList.toggle("done");
    };
  
    // Delete button
    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-sm btn-outline-danger";
    delBtn.innerText = "Delete";
    delBtn.onclick = () => {
      li.remove();
    };
  
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  
    input.value = ""; // clear input
  }
  