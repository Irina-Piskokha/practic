!function(){var t={form:document.querySelector("#task-form"),list:document.querySelector("#task-list")};function n(t){var n={};return new FormData(t.currentTarget).forEach((function(t,e){n[e]=t})),n}function e(t){return'<li class="task-list-item">\n       <button class="task-list-item-btn">Удалить</button>\n       <h3>'.concat(t.taskName,"</h3>\n       <p>").concat(t.taskText,"</p>\n   </li>")}t.form.addEventListener("submit",(function(r){r.preventDefault();var a=e(n(r));t.list.insertAdjacentHTML("beforeend",a),t.form.reset()}))}();
//# sourceMappingURL=index.1763e45d.js.map
