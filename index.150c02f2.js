const t={form:document.querySelector("#task-form"),list:document.querySelector("#task-list")};function e(t){const e={};return new FormData(t.currentTarget).forEach(((t,s)=>{e[s]=t})),e}function s(t){return`<li class="task-list-item">\n       <button class="task-list-item-btn">Удалить</button>\n       <h3>${t.taskName}</h3>\n       <p>${t.taskText}</p>\n   </li>`}const n={saveTask:function(t){const e=JSON.parse(localStorage.getItem("tasks"))||[];e.push(t),localStorage.setItem("tasks",JSON.stringify(e))}};t.form.addEventListener("submit",(function(a){a.preventDefault();const o=e(a),r=s(o);t.list.insertAdjacentHTML("beforeend",r),n.saveTask(o),t.form.reset()}));
//# sourceMappingURL=index.150c02f2.js.map
