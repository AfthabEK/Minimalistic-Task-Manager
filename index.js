//MODEL SECTION

let tasks = [];

let completedTasks = [];




//create task function
function createtask(task, id) {
    tasks.push({
        taskname: task,

        id: id,
    });

}

//removetask function
function removetask(idtodelete) {
    tasks = tasks.filter(function (task) {
        if (task.id === idtodelete) {
            return false;
        } else {
            return true;
        }
    });

}
//completetask function
function movetocomplete(idtocomplete) {
    tasks = tasks.filter(function (task) {
        if (task.id === idtocomplete) {
            completedTasks.push(task);
            return false;
        } else {
            return true;
        }
    });

}





renderpending();
rendercompleted();



//CONTROLLER SECTION
function addtask() {
    const textbox = document.getElementById("task");
    const task = textbox.value;
    const id = "" + new Date().getTime();
    createtask(task, id);
    renderpending();
    rendercompleted();
}

function delete_task(event) {
    const idtodelete = event.target.id;
    removetask(idtodelete);

    renderpending();
    rendercompleted();
}

function completetask(event) {
    const idtocomplete = event.target.id;
    movetocomplete(idtocomplete);

    renderpending();
    rendercompleted();
}

//VIEW SECTION
function renderpending() {
    document.getElementById("tasklist").innerHTML = "";

    tasks.forEach(function (task) {
        //main content
        const element1 = document.createElement("div");
        element1.className = 'pendingClass';
        element1.innerText = task.taskname

        //delete button
        const deletebutton = document.createElement("button");
        deletebutton.innerText = "delete";
        deletebutton.style = "margin-left:15px";
        deletebutton.className = "deletebuttonClass"

        deletebutton.onclick = delete_task;
        deletebutton.id = task.id;

        element1.appendChild(deletebutton);

        //complete button
        const completebutton = document.createElement("button");
        completebutton.innerText = "complete";
        completebutton.style = "margin-left:15px";

        completebutton.onclick = completetask;
        completebutton.id = task.id;
        completebutton.className = 'completebuttonClass'

        element1.appendChild(completebutton);

        const tasksection = document.getElementById("tasklist");
        tasksection.appendChild(element1);
    });
}

function rendercompleted() {
    document.getElementById("completelist").innerHTML = "";

    completedTasks.forEach(function (tasks) {
        const element2 = document.createElement("div");
        element2.innerText = tasks.taskname
        element2.className = 'completedClass';
        const completesection = document.getElementById("completelist");
        completesection.appendChild(element2);
    });
}