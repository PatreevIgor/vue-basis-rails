<template>
    <div>
      <h1>[4.5] Registration components (locally into other component) </h1>

      <h3>Name: {{ carName }}</h3>
      <h3>Years: {{ carYears }}</h3>
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
    }
  }
</script>
