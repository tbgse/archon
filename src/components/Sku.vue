<template>
  <div v-if='sku && sku !== "invalid"'>
    <h2>{{sku.current_variant.name}} {{sku.current_variant.display_attributes.color}}</h2>
    <p>{{sku.current_variant.display_attributes.description}}</p>
  </div>
</template>

<script>
export default {
  name: 'sku',
  serverPrefetch () {
    console.log('running prefetch hook');
    return this.setInitialData();
  },
  computed: {
    sku () {
      return this.$store.state.sku;
    }
  },
  mounted () {
    if (!this.sku) {
      console.log('setting initial data in client');
      this.setInitialData();
    }
  },
  methods: {
    setInitialData () {
      console.log('setting initial data...');
      return this.$store.dispatch('fetchItem', this.$route.params.name);
    }
  }
}
</script>
