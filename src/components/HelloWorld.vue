<template>
  <router-view v-slot="{ Component }">
      <component :is="Component" />
  </router-view>
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
  serverPrefetch() {
    console.log('running prefetch');
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
