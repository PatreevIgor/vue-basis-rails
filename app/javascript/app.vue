<template>
  <div id='app'>
    <p>{{ message }}</p>
      <app-counter></app-counter>

      <hr>

      <app-car></app-car>

      <hr>

      <app-argument-component :carName='carName' > </app-argument-component>

      <hr>
 
      <app-validate-arguments :carName='carName' :carYears='carYears'> </app-validate-arguments>

      <hr>

      <h1>Parent name: {{ carName }}</h1>
      <app-send-param-to-parent @nameChanged="carName = $event"> </app-send-param-to-parent>

      <hr>

      <h1>Parent name: {{ carName }}</h1>
      <app-send-function-from-parent-to-child :changeFunc="changeNameToAudi"></app-send-function-from-parent-to-child>

      <hr>

      <h1>[4.10] Send params (update params) between childs</h1>
      <h2>secondChildParam: {{ secondChildParam }}</h2>
      <app-child-first :secondChildParam='secondChildParam'
                       @secondChildParamUpdated="secondChildParam = $event"></app-child-first>
      <app-child-second :secondChildParam='secondChildParam'></app-child-second>
      <hr>

      <h1>[4.11] Send params between childs (use eventEmitter)</h1>
      <app-event-emitter-child-first></app-event-emitter-child-first>
      <app-event-emitter-child-second></app-event-emitter-child-second>

      <hr>

      <app-style-child-first></app-style-child-first>
      <app-style-child-second></app-style-child-second>

      <hr>
    </div>
  </div>
</template>

<script>
  import car from './components/car'

  export default {
    data() {
      return {
        message: 'Hello Vue!',
        carName: 'Opel Frontera',
        carYears: 30,
        secondChildParam: 1
      }
    },
    components: {
      appCar: car
    },
    methods: {
      changeNameToAudi() {
        this.carName = 'Audi'
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>

