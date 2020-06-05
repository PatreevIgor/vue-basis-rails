<template>
  <div id='app'>
    <p>{{ message }}</p>
      <app-counter></app-counter>
      <hr>
      <app-car></app-car>
      <hr>
      <app-argument-component :carName='carName'> </app-argument-component>
    </div>
  </div>
</template>

<script>
  import car from './components/car'

  export default {
    data() {
      return {
        message: 'Hello Vue!',
        carName: 'Opel Frontera'
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
