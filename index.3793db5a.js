!function(){var t={form:document.querySelector("#task-form"),list:document.querySelector("#task-list")},e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")};function n(t){var n={id:e()};return new FormData(t.currentTarget).forEach((function(t,e){n[e]=t})),n}function r(t){return'<li class="task-list-item">\n       <button class="task-list-item-btn" data-id="'.concat(t.id,'">Удалить</button>\n       <h3>').concat(t.taskName,"</h3>\n       <p>").concat(t.taskText,"</p>\n   </li>")}var a="tasks";function i(){return JSON.parse(localStorage.getItem(a))||[]}var o,s={saveTask:function(t){var e=i();e.push(t),localStorage.setItem(a,JSON.stringify(e))},getAll:i,setItem:function(t){localStorage.setItem(a,JSON.stringify(t))}};t.form.addEventListener("submit",(function(e){e.preventDefault();var a=n(e),i=r(a);t.list.insertAdjacentHTML("beforeend",i),s.saveTask(a),t.form.reset()})),o=s.getAll().map(r).join(""),t.list.insertAdjacentHTML("beforeend",o),t.list.addEventListener("click",(function(t){if("BUTTON"===t.target.nodeName){var e=t.target.dataset.id,n=s.getAll().filter((function(t){return t.id!==e}));s.setItem(n),t.target.closest("li").remove()}}))}();
//# sourceMappingURL=index.3793db5a.js.map