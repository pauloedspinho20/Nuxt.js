<template>
  <div>
    <div v-if="streams.length == 0" class="text-center">
      <h1 class="">Stream '{{ search }}' not found.</h1>
    </div>

    <b-card-group v-else columns class="twitch-streams">
      <div v-for="stream in streams" :key="stream.id">
        <!--   <nuxt-link :to="{ name: 'streams', params: { id: stream.id } }"> -->
        <nuxt-link :to="'streams/' + stream.id">
          <b-card
            class="stream"
            :img-src="
              stream.thumbnail_url
                .replace('{width}', '320')
                .replace('{height}', '240')
            "
            img-alt="Image"
            img-top
          >
            <b-card-title>{{ stream.title }}</b-card-title>
            <div slot="footer" class="d-flex justify-content-between">
              <small>{{ stream.user_name }}</small>
              <small class="text-muted">
                <i class="fa fa-globe" aria-hidden="true" />
                {{ stream.language }}
              </small>
            </div>
          </b-card>
        </nuxt-link>
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
