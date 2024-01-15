export function createTaskMarkup(task) {
  return `<li class="task-list-item">
       <button class="task-list-item-btn" data-id="${task.id}">Удалить</button>
       <h3>${task.taskName}</h3>
       <p>${task.taskText}</p>
   </li>`;
}
