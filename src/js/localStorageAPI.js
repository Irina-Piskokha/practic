const LOCAL_STORAGE = 'tasks';
function saveTask(task) {
  const arrayOfObj = getAll();
  arrayOfObj.push(task);
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(arrayOfObj));
}
function getAll() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE)) || [];
}

export const localStorageAPI = { saveTask, getAll };
