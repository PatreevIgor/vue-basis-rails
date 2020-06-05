<template>
    <div style="border: 1px solid black;padding: 10px">
      <h1>[4.1] Component </h1>

      <h2>Counter: {{ counter }}</h2>
      <button @click="add">Add to counter</button>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        counter: 0
      }
    },
    methods: {
      add: function(event) {
        this.counter ++
      }
    }
  }
</script>
