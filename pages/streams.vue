<template>
  <div>
    <h1>Steams</h1>
    <TwitchStreams />
  </div>
</template>

<script>
import TwitchStreams from "../components/api/TwitchStreams.vue"

export default {
  components: {
    TwitchStreams
  }
}
</script>

<style lang="scss">
@import "./assets/scss/pages/_streams.scss";
</style>
