const LOCAL_STORAGE = 'tasks';
function saveTask(task) {
  const arrayOfObj = JSON.parse(localStorage.getItem(LOCAL_STORAGE)) || [];
  arrayOfObj.push(task);
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(arrayOfObj));
}
export const localStorageAPI = { saveTask };
