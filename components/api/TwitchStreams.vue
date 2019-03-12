<template>
  <div>
    <div v-if="streams.length == 0" class="text-center">
      <h1 class="">Stream '{{ search }}' not found.</h1>
    </div>

    <b-card-group v-else columns>
      <div v-for="stream in streams" :key="stream.id">
        <nuxt-link to="stream" />
        <b-card
          :img-src="
            stream.thumbnail_url
              .replace('{width}', '320')
              .replace('{height}', '240')
          "
          img-alt="Image"
          img-top
        >
          <b-card-title>{{ stream.title }}</b-card-title>
          <b-card-text />
          <div slot="footer">
            <small class="text-muted"> {{ stream.type }}</small>
            <small class="text-muted"> {{ stream.language }}</small>
          </div>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>

<script>
import axios from "axios"

export default {
  middleware: "auth",
  props: ["streams", "search"]
}
</script>

<style lang="scss"></style>
