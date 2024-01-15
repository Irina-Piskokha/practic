import { nanoid } from 'nanoid';

export function createTask(evt) {
  const task = { id: nanoid() };
  new FormData(evt.currentTarget).forEach((value, key) => {
    task[key] = value;
  });
  return task;
}
