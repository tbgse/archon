<template>
  <h1>This is the homepage</h1>
  <div>{{test}}</div>
</template>

<script>


export default {
  name: 'Homepage',
  data () {
    return {
      test: 'prefetch is not working'
    }
  },
  serverPrefetch () {
    console.log('running prefetch hook');
    return this.setInitialData();
  },
  methods: {
    setInitialData () {
      this.test = 'prefetch is working'
    }
  }
}
</script>
