<template>
  <div>
    <h1>I am child first</h1>
    <button @click="updateEESecondChildParam">updateEESecondChildParam</button>
  </div>
</template>

<script>
  import { eventEmitter } from '../packs/app'

  export default {
    methods: {
      updateEESecondChildParam() {

        console.log('-----------------------')
        console.log(eventEmitter._uid)
        console.log('-----------------------')

        // this.$emit('EEsecondChildParamUpdated', this.EEsecondChildParam + 1)
        eventEmitter.$emit('EEsecondChildParamUpdated')
      }
    }
  }
</script>
