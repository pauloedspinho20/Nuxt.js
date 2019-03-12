<template>
  <section class="container h-100 d-flex flex-column">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <img class="my-5" src="@/assets/img/blip-logo.svg" alt="Blip logo" >
      </div>
      <div class="col-12 text-center">
        <h4 class=" my-3">
          My Vue project based on Nuxt.js for BLIP.pt job application
        </h4>
        <nuxt-link class="btn btn-primary" to="/streams">
          Check Twitch live streams!
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: "Blip.pt Job Application"
  }
}
</script>

<style lang="scss"></style>
