describe('Elementos del DOM', () => {
  test('Añade nueva tarea a la lista', () => {

    document.body.innerHTML = `
      <input id="new-task" />
      <button id="add-task">Añadir tarea</button>
      <ul id="task-list"></ul>
    `;
    require('./task.js');
    
    const newTask = document.getElementById('new-task');
    const addButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    newTask.value = 'Nueva tarea';
    addTask.click();

    expect(taskList.innerHTML).toContain('<li>Nueva tarea</li>')
  });
})