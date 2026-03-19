describe('Elementos del DOM', () => {
  test('Añade nueva tarea a la lista', () => {

    document.body.innerHTML = `
      <input id="new-task" />
      <button id="add-task">Añadir tarea</button>
      <ul id="task-list"></ul>
    `

  })
})