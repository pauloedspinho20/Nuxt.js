<template>
  <div class="wrapper bg-light">
    <Navbar />
    <main>
      <nuxt />
    </main>
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
@import "../assets/scss/_main.scss";
</style>
