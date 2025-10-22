function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete");
    completeBtn.onclick = function() {
        completeTask(li);
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById("pendingTasks").appendChild(li);
    taskInput.value = "";
}

function completeTask(task) {
    task.querySelector(".complete").remove(); // remove complete button
    document.getElementById("completedTasks").appendChild(task);
}