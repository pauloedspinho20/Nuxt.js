<template>
  <section class="container bg-primary">
    <div class="row">
      <div class="col-12">
        <logo />
      </div>
      <div class="col-12">
        <h1 class="title">
          nuxty
        </h1>
        <h2 class="subtitle">
          My Vue project based on Nuxt.js for Blip job apply
        </h2>
        <div class="links">
          <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
          <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }

</script>

<style lang="scss">
  @import "./assets/scss/pages/_index.scss";

</style>
