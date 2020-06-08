<template>
  <div>
    <h1>I am child second</h1>
    <h3>EESecondChildParam: {{ EESecondChildParam }}</h3>
    <button @click="increaseEESecondChildParam">increaseEESecondChildParam</button>
  </div>
</template>

<script>
  import { eventEmitter } from '../packs/app.js'

  export default {
    data () {
      return {
        EESecondChildParam: 0
      }
    },
    methods: {
      increaseEESecondChildParam() {
        this.EESecondChildParam++
      }
    },
    created() {
        console.log('+++++++++++++++')
        console.log(eventEmitter._uid)
        console.log('+++++++++++++++')

      eventEmitter.$on('EEsecondChildParamUpdated', () => {
        this.EEsecondChildParam++
      })
    }
  }
</script>
