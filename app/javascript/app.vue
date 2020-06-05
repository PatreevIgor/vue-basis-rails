<template>
  <div id="app">
    <p>{{ message }}</p>
      <app-counter></app-counter>
      <hr>
      <app-car></app-car>
    </div>
  </div>
</template>

<script>
  import car from './components/car'

  export default {
    data: function () {
      return {
        message: "Hello Vue!"
      }
    },
    components: {
      appCar: car
    }
  }
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
