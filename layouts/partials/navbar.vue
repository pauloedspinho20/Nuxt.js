<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark" fixed="true">
      <div class="container">
        <div class="row">
          <b-navbar-brand to="/">
            BLIP.PT JOB APPLY
          </b-navbar-brand>

          <b-navbar-toggle target="nav_collapse" />

          <b-collapse id="nav_collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="streams">
                Streams
              </b-nav-item>
              <b-nav-item to="about">
                About
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
/* @import "./assets/scss/layouts/_navbar.scss"; */
</style>
