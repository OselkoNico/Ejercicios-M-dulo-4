const addTask = () => {
 const newTask = document.getElementById('new-task');
 let currentTasks = document.getElementById('task-list').innerHTML;
 currentTasks += `<li>${newTask.value}</li>`;
 document.getElementById('task-list').innerHTML = currentTasks;
 newTask.value = '';
}
document.getElementById('add-task').addEventListener('click', addTask);