<template>
  <div id="app">
    <TodoList v-bind:todos="todos"></TodoList>
    <TodoForm submit="addTodo"></TodoForm>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";

export default {
  name: "App",
  components: {
    TodoList,
    TodoForm
  },
  data: () => ({
    todos: ["test 1"]
  }),
  methods: {
    addTodo: todo => {
      alert("submit");
      this.todos.push(todo);
    }
  }
};
</script>
