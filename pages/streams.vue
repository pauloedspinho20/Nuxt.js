<template>
  <div>
    <h1 class="text-center">
      Streams
    </h1>

    <TwitchStreams :streams="streams" />
  </div>
</template>

<script>
import axios from "axios"
import TwitchStreams from "../components/api/TwitchStreams.vue"
axios.defaults.headers.common["Client-ID"] = "4lb0nos4w98bwq6behhi3rjg32m2w9"
export default {
  components: {
    TwitchStreams
  },
  asyncData({ error }) {
    return axios
      .get("https://api.twitch.tv/helix/streams")

      .then(res => {
        return { streams: res.data.data }
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
