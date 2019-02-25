<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./partials/navbar"
import Footer from "./partials/footer"

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import "bootstrap/scss/bootstrap.scss";
@import "bootstrap-vue/src/index.scss";
</style>
