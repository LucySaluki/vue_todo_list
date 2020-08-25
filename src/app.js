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
        newToDoItem: {
          item:"",
          priority:""
        }
    },
    methods: {
        saveToDoItem: function () {
            this.todos.push(this.newToDoItem);
            this.newToDoItem = {
              item:"", 
              priority:""}
        },
        togglePriority: function(index) {
          if (this.todos[index].priority==='High'){
            this.todos[index].priority='Low';
          } else {
            this.todos[index].priority='High';
          }
        },
        removeItem: function(index) {
          this.todos.splice(index,1);
        }
    }
  });
});