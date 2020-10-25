<template>
  <h1>Sku {{name}}</h1>
</template>

<script>
export default {
  name: 'sku',
  serverPrefetch () {
    console.log('running prefetch hook');
    return this.setInitialData();
  },
  computed: {
    name () {
      return this.$store.state.name;
    }
  },
  mounted () {
    if (!this.name) {
      console.log('setting initial data in client');
      this.setInitialData();
    }
  },
  methods: {
    setInitialData () {
      console.log(this.$route);
      this.$store.commit('setItem', this.$route.params.name);
    }
  }
}
</script>
