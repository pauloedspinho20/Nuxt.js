<template>
  <section class="container">
    <div class="col-12 text-center">
      <h1 clas="py-3">
        {{ title }}
      </h1>
    </div>
    <div class="col-12  my-5">
      <input
        id="search"
        v-model="search"
        class="form-control"
        type="search"
        placeholder="Search streams"
        aria-describedby="inputGroup-sizing-lg"
      />
    </div>
    <div class="col-12 col-sm-6">
      <p class="text-left">Number of results: {{ filteredStreams.length }}</p>
    </div>

    <div class="col-12">
      <TwitchStreams :streams="filteredStreams" :search="search" />
    </div>
  </section>
</template>

<script>
import axios from "axios"
import TwitchStreams from "@/components/api/TwitchStreams.vue"
axios.defaults.headers.common["Client-ID"] = "4lb0nos4w98bwq6behhi3rjg32m2w9"
export default {
  components: {
    TwitchStreams
  },
  data: function() {
    return {
      search: "",
      title: "Search Streams"
    }
  },
  computed: {
    filteredStreams: function() {
      return this.streams.filter(stream => {
        return stream.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  asyncData({ error }) {
    return axios
      .get("https://api.twitch.tv/helix/streams")

      .then(res => {
        return {
          streams: res.data.data
        }
      })
      .catch(e => {
        error({ statusCode: 404, message: "Post not found" })
      })
  }
}
</script>

<style lang="scss">
/* @import "./assets/scss/pages/_streams.scss"; */
</style>
