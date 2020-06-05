<template>
    <div>
      <h1>[4.6] Arguments for components (carName was sending as argument)</h1>

      <h3>Name: {{ carName }}</h3>
      <h3>Years: {{ carYears }}</h3>
    </div>
</template>

<script>
  export default {
    props: ['carName'],
    data() {
      return {
        carYears: 5
      }
    },
    methods: {
    }
  }
</script>
