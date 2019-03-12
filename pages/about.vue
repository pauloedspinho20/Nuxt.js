<template>
  <section class="container-fluid">
    <div class="row py-5 bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3">
            <div
              id="profile-photo"
              class="border-0 rounded-circle d-flex align-items-start overflow-hidden"
            >
              <b-img
                class="img-fluid"
                :src="require('../assets/img/paulopinho.jpg')"
              />
            </div>
          </div>

          <div class="col-md-9">
            <h1 class="text-dark">
              PAULO PINHO
            </h1>
            <h3 class="text-dark">
              FrontEndWebDeveloper()
            </h3>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialLinks from "../components/SocialLinks.vue"
export default {
  components: {
    SocialLinks
  }
}
</script>

<style lang="scss">
/* @import "./assets/scss/pages/_about.scss"; */
</style>
