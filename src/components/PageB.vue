<template>
  <h1>I AM PAGE B</h1>
</template>

<script>
if (typeof window !== 'undefined') {
window.alert('Page B');
}

export default {
  name: 'PageB',
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
