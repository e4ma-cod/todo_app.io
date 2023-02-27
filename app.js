const taskBtn = document.getElementById("taskBtn");
const editBtn = document.getElementById("taskEdit");
const deleteBtn = document.getElementById("taskDelete");
const taskDeleteBtn = document.getElementById('deleteBtn');
let newDate = document.getElementById("date");

const today = new Date();
newDate.innerHTML = today.toLocaleDateString();

function addNewTask() {
    var taskList = document.getElementById("taskList");
    var taskName = document.getElementById("taskName").value;
    var taskTime = document.getElementById("taskTime").value;

    let taskArr = [];
    taskArr.push(taskName);

    taskArr.forEach(function(item) {
        let li = document.createElement("li");    
        li.innerHTML = `<div>
                            <div class="d-flex justify-content-end">
                                <i class="bi bi-pencil-square me-3 font-25" id="taskEdit" onclick="editTask()"></i>
                                <i class="bi bi-x-square font-25" id="taskDelete" onclick="deleteTask()"></i>                                
                            </div>
                            <div class="d-flex w-100 justify-content-between">
                                <input type="checkbox" id="cbox">
                                <label for="cbox" class="ms-2" style="width: 90%;">${taskName} </br><span class="text-secondary">${taskTime}</span></label>                                
                            </div>
                        </div>`;
        li.classList.add("task-item");        
        taskList.appendChild(li);    
    })       
};
taskBtn.addEventListener("click", addNewTask);


function deleteTasks() {
    let tasks = document.getElementById("tasks");

    tasks.removeChild(taskList);
    return addNewTask;
}
taskDeleteBtn.addEventListener("click", deleteTasks);