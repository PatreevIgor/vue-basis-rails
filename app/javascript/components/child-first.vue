<template>
  <div>
    <h1>I am child first</h1>
    <button @click="updateSecondChildParam">updateSecondChildParam</button>
  </div>
</template>

<script>
  export default {
    props: ['secondChildParam'],
    methods: {
      updateSecondChildParam() {
        this.$emit('secondChildParamUpdated', this.secondChildParam + 1)
      }
    }
  }
</script>
