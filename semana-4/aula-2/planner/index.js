
function setTask() {
    const taskDay = document.getElementById("task-day");
    const taskText = document.getElementById("task-text");
    let taskID = 0;

    if (taskDay.value === "none" || taskText.value === "") {
        
        alert("Erro: Informe o nome e dia da tarefa.");
    }
    else {

        const taskDayNum = Number(taskDay.value);

        const taskList = document.getElementsByTagName("ul")[taskDayNum];

        taskID++;

        taskList.innerHTML += `<li><span id="task-num-${taskID}" onclick="riskTask(this.id)">${taskText.value}</li>`;

        resetPlanner(taskID);
    }

    taskText.value = "";

    event.preventDefault();
}

function riskTask(taskIDString) {
    
    taskItem = document.getElementById(taskIDString);

    taskItem.classList.toggle("risked-task");
}