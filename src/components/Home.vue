<template>
  <h1>I AM THE HOMEPAGE</h1>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  mounted () {
    this.randomNumber = Math.random();
  },
  data() {
    return {
      randomNumber: 0,
      initialized: false,
      count: 0
    }
  }
}
</script>
