import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
        todos: [
          {item: "Buy shopping", priority:"High"},
          {item: "Clean bathroom", priority:"Low"},
          {item: "Car's MOT", priority:"High"}
        ],
        newToDoitem:"",
        newPriority:""
    },
    methods: {
        saveToDoItem: function () {
            this.todos.push({
              item: this.newToDoItem,
              priority: this.newPriority
            });
            this.newToDoItem = "",
            this.newPriority = "";
        },
        togglePriority: function(index, priority) {
          if (this.todos[index].priority==='High'){
            this.todos[index].priority='Low';
          } else {
            this.todos[index].priority='High';
          }
        }
    }
  });
});