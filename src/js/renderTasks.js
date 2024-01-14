import { localStorageAPI } from "./localStorageAPI";
import { refs } from "./refs";
import { createTaskMarkup } from "./createTaskMarkup";

export function renderTasks() {
    const tasks = localStorageAPI.getAll();
   const markup = tasks.map(createTaskMarkup).join("");
   refs.list.insertAdjacentHTML('beforeend', markup);
   }