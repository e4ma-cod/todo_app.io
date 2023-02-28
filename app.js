const taskBtn = document.getElementById("taskBtn");
const taskDeleteBtn = document.getElementById('deleteBtn');
let newDate = document.getElementById("date");

const today = new Date();
newDate.innerHTML = today.toLocaleDateString();

function addNewTask() {
    var taskList = document.getElementById("taskList");
    var taskName = document.getElementById("taskName").value;
    var taskTime = document.getElementById("taskTime").value;

    let taskArr = [];
    taskArr.push({
        task: taskName,
        time: taskTime,
    });

    taskArr.forEach(function(item) {
        var li = document.createElement("li");    
        li.innerHTML = `<div>
                            <div class="d-flex justify-content-end">
                                <i class="bi bi-pencil me-3 font-25" id="taskEdit" onclick="editTask(this)"></i>
                                <i class="bi bi-x-lg font-25" id="taskDelete" onclick="deleteTask(this)"></i>                                
                            </div>
                            <div class="d-flex w-100 justify-content-between" id="editBox">
                                <input type="checkbox" id="cbox">
                                <label class="ms-2" id="editBox" style="width: 90%;" contenteditable="true">${taskName} </br><span class="text-secondary" id="editTime" contenteditable="true">${taskTime}</span></label>                                
                            </div>                            
                        </div>`;
        li.classList.add("task-item");        
        taskList.appendChild(li);    
    })          
};
taskBtn.addEventListener("click", addNewTask);

let deleteTask = (e) => {
    e.parentElement.parentElement.parentElement.remove();    
};

function deleteTasks() {    
    taskList.innerHTML = "";
    return taskArr;    
}
taskDeleteBtn.addEventListener("click", deleteTasks);
