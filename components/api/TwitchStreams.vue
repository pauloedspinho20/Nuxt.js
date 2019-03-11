<template>
  <div>
    <b-card-group columns>
      <a v-for="stream in streams" :key="stream.id">
        <b-card :img-src="stream.thumbnail_url" img-alt="Image" img-top>
          <b-card-title>{{ stream.title }}</b-card-title>
          <b-card-text />
          <div slot="footer">
            <small class="text-muted"> {{ stream.type }}</small>
            <small class="text-muted"> {{ stream.language }}</small>
          </div>
        </b-card>
      </a>

      <!--    <nuxt-link to="/"> -->
      <!--  <b-card
            v-for="stream in streams"
            :key="stream.id"
            overlay
            img-src="https://picsum.photos/900/250/?image=3"
            img-alt="Card Image"
            text-variant="white"
            :title="stream.title"
            :sub-title="streams.type"
          >
            <b-card-text>
              Some quick example text to build on the card and make up the bulk
              of the card's content.
            </b-card-text>
          </b-card> -->
      <!-- </nuxt-link> -->
    </b-card-group>
  </div>
</template>

<script>
import axios from "axios"

export default {
  middleware: "auth",
  props: ["streams"]
}
</script>

<style lang="scss"></style>
