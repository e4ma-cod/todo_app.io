/* const taskBtn = document.getElementById("taskBtn");
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
                                <i class="bi bi-pencil me-3 font-25" onclick="editTask(this)"></i>
                                <i class="bi bi-x-lg font-25" onclick="deleteTask(this)"></i>                                
                            </div>
                            <div class="d-flex w-100 justify-content-between">
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

let editTask = (e) => {
    document.getElementById("editBox").focus();
}

function deleteTasks() {    
    taskList.innerHTML = "";
    return taskArr;    
}
taskDeleteBtn.addEventListener("click", deleteTasks); */



const taskBtn = document.getElementById("taskBtn");
const taskDeleteBtn = document.getElementById('deleteBtn');
let newDate = document.getElementById("date");
let taskList = document.getElementById("taskList");
let tName = document.getElementById("taskName");
let tTime = document.getElementById("taskTime");
let checkbox = document.getElementById("cbox");

const today = new Date();
newDate.innerHTML = today.toLocaleDateString();

let taskArr = [];

function updateUI() {
    taskArr.forEach(function(item) {
        var li = document.createElement("li");    
        li.innerHTML = `<div>
                            <div class="d-flex justify-content-end">
                                <i class="bi bi-pencil me-3 font-25" onclick="editTask(${taskArr.id})"></i>
                                <i class="bi bi-x-lg font-25" onclick="deleteTask(${taskArr.id})"></i>                                
                            </div>
                            <div class="d-flex w-100 justify-content-between">
                                <input type="checkbox" id="cbox">
                                <label class="ms-2" id="editBox" style="width: 90%;" contenteditable="true">${taskName} </br><span class="text-secondary" id="editTime" contenteditable="true">${taskTime}</span></label>                                
                            </div>                            
                        </div>`;
        li.classList.add("task-item");        
        taskList.appendChild(li);    
    })          
};

function addNewTask() {
    let taskName = tName.value;
    let taskTime = tTime.value;

    taskArr.push({
        task: taskName,
        time: taskTime,
        id: math.floor((date.now())/1000),
    });
    updateUI();
}    
taskBtn.addEventListener("click", addNewTask);

let deleteTask = (taskArr.id) => {
    taskArr = taskArr.filter(
        (item) => {
            item.id != taskArr.id;
})
    updateUI(taskArr);
};

let editTask = (taskArr.id) => {
    document.getElementById("editBox").focus();
}

function deleteTasks() {    
    if (checkbox.checked == true) {
        taskList.removeChild();
    } else {
        updateUI(taskArr);
    }
}
taskDeleteBtn.addEventListener("click", deleteTasks);

