<template>
  <div>
    <h1>Steams</h1>
    <TwitchStreams :jokes="jokes" />
  </div>
</template>

<script>
import axios from "axios"
import TwitchStreams from "../components/api/TwitchStreams.vue"

export default {
  components: {
    TwitchStreams
  },
  asyncData({ error }) {
    return axios
      .get("http://api.icndb.com/jokes/random/10")
      .then(res => {
        return { jokes: res.data.value }
      })
      .catch(e => {
        error({ statusCode: 404, message: "Post not found" })
      })
  }
}
</script>

<style lang="scss">
@import "./assets/scss/pages/_streams.scss";
</style>
