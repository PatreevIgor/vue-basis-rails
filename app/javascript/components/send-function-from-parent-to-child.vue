<template>
    <div>
      <h1>[4.9] Send function from parent to child</h1>

      <h3>Name: {{ carName }}</h3>
      <h3>Years: {{ carYears }}</h3>

      <button @click="changeName">Change name</button>
      <button @click="changeFunc()">Change name from parent</button>
    </div>
</template>

<script>
  export default {
    props: {
      changeFunc: Function
    },
    data() {
      return {
        carName: 'Mersedes',
        carYears: 5
      }
    },
    methods: {
      changeName() {
        this.carName = 'Mazda'
        this.$emit('nameChanged', this.carName)
      }
    }
  }
</script>
