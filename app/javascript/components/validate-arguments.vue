<template>
    <div>
      <h1>[4.7] Validate arguments while sending params as arguments</h1>

      <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
      <h3>Years: {{ carYears }}</h3>
    </div>
</template>

<script>
  export default {
    props: {
      carName: {
        type: String,
        required: true,
        default: 'Default car Name'
      },
      carYears: Number
    },
    computed: {
      reverseName() {
        return this.carName.split('').reverse().join('')
      }
    },
    methods: {
    }
  }
</script>
