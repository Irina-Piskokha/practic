export function createTask(evt) {
  const task = {};
  new FormData(evt.currentTarget).forEach((value, key) => {
    task[key] = value;
  });
  return task;
}
