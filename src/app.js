import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
        todos: ["Buy shopping", "Clean bathroom", "Car's MOT"],
        newToDoItem:""
    },
    methods: {
        saveToDoItem: function () {
            this.todos.push(this.newToDoItem);
            this.newToDoItem = "";
        }
    }
  });
});