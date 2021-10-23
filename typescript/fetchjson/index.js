"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n    The Todo with ID: " + id + "\n    Has a title of: " + title + "\n    Is it finished? " + completed + "\n  ");
};
