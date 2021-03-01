<template>
  <div>
    <h1>
      todo list
    </h1>
    <ul>
      <li v-for="todo in todos" :key="todo">
        <Todo v-bind:text="todo"></Todo>
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  name: "TodoList",
  components: {
    Todo
  },
  props: ["todos"]
};
</script>
