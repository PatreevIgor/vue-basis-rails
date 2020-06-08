<template>
  <div>
    <h1>I am child second</h1>
    <h3>secondChildParam: {{ secondChildParam }}</h3>
  </div>
</template>

<script>
  export default {
    props: {
      secondChildParam: Number
    }
  }
</script>
