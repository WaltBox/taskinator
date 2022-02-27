var formEL = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskIdCounter =0;

var taskFormHandler = function (event) {
    
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    formEL.reset ();
    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };


    createTaskEl(taskDataObj);
}


//Create Task Function
var createTaskEl = function(taskDataObj) {
 
    
var listItemEl = document.createElement("li");
    listItemEl.className= "task-item";

    //add task id as a custom attribute
    listItemEl.setAttribute("data-task-id",taskIdCounter);


    // Create Div to holf task info and add to list item
var taskInfoEl = document.createElement("div");

    // Give it a class name
    taskInfoEl.className ="task-info";

    // Add HTML content to div
    taskInfoEl.innerHTML ="<h3 class='task-name'>" + taskDataObj.name + "</h3> <span class='task-type'>" +taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);
    // Add entire list item to list

    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);

    tasksToDoEl.appendChild(listItemEl);

    tasksToDoEl.appendChild(listItemEl);

    //Increase task counter for next unique id
    taskIdCounter++;

};


// CREATE TASK ACTIONS FUNCTION 2
var createTaskActions =function(taskId) {

var actionContainerEl = document.createElement("div");
actionContainerEl.className = "task-actions";
// Create Edit button
var editButtonEl = document.createElement("button");
editButtonEl.textContent = "Edit";
editButtonEl.className="btn edit-btn";
editButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(editButtonEl);

// Create Delete Button
var deleteButtonEl= document.createElement("button");
deleteButtonEl.textContent = "Delete";
deleteButtonEl.className = "btn delete-btn";
deleteButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(deleteButtonEl);

var statusSelectEl = document.createElement("select");
statusSelectEl.className = "select-status";
statusSelectEl.setAttribute("name","status-change");
statusSelectEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(statusSelectEl);

var statusChoices = ["To Do", "In Progress", "Completed"];


for (var i = 0; i < statusChoices.length; i++) {
    // Create Option Element
    var statusOptionEl = document.createElement("option");
    statusOptionEl.textContent = statusChoices[i];
    statusOptionEl.setAttribute("value", statusChoices[i]);
    //append to select
    statusSelectEl.appendChild(statusOptionEl);
}
return actionContainerEl;
};

formEL.addEventListener("submit", taskFormHandler);


