<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>A random number: {{randomNumber}}</p>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>


export default {
  name: 'HelloWorld',
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
