/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */

import { refs } from './js/refs';
import { createTask } from './js/createTask';
import { createTaskMarkup } from './js/createTaskMarkup';
import { localStorageAPI } from './js/localStorageAPI';
import { renderTasks } from './js/renderTasks';

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const task = createTask(evt);
  const markup = createTaskMarkup(task);
  refs.list.insertAdjacentHTML('beforeend', markup);
  localStorageAPI.saveTask(task);
  refs.form.reset();
}

renderTasks();

refs.list.addEventListener('click', deleteTask);
function deleteTask(event) {
  if (event.target.nodeName === 'BUTTON') {
    const idNumber = event.target.dataset.id;
    const arrayFromLS = localStorageAPI.getAll();

    const updatedArray = arrayFromLS.filter(({ id }) => id !== idNumber);

    localStorageAPI.setItem(updatedArray);
    event.target.closest('li').remove();
  }
}
