<template>
  <form v-on:submit.prevent="handleSubmit">
    <input type="text" v-model="todo" />
    <button type="submit">Add todo</button>
  </form>
</template>

<script>
export default {
  name: "TodoForm",
  data: () => ({
    todo: ""
  }),
  props: ["submit"],
  methods: {
    handleSubmit: function() {
      alert(this.props.todo);
    }
  }
};
</script>
