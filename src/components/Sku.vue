<template>
  <h1>Sku {{name}}</h1>
</template>

<script>
export default {
  name: 'sku',
  data () {
    return {
      name: ''
    }
  },
  serverPrefetch () {
    console.log('running prefetch hook');
    return this.setInitialData();
  },
  methods: {
    setInitialData () {
      console.log(this.$route);
      this.name = this.$route.params.name;
    }
  }
}
</script>
