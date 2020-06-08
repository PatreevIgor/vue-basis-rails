<template>
    <div>
      <h1>[4.8] Send param to parent component</h1>

      <h3>Name: {{ carName }}</h3>
      <h3>Years: {{ carYears }}</h3>

      <button @click="changeName">Change name</button>
    </div>
</template>

<script>
  export default {
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
