<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">
        Blip
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse id="nav_collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/search">
            Search
          </b-nav-item>
          <b-nav-item href="/streams">
            Streams
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">
              Search
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "./assets/scss/layouts/_navbar.scss";
</style>
