<template>
  <div>
    <Navbar/>
    <nuxt />
  </div>
</template>

<script>

import Navbar from './partials/navbar';

export default {
  components: {
    Navbar
  }
}
</script>
<style lang="scss">

@import 'bootstrap/scss/bootstrap.scss';
@import 'bootstrap-vue/src/index.scss';


</style>
