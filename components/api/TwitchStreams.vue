<template>
  <div id="app">
    <div class="wrapper">
      <div>
        <b-card-group columns>
          <nuxt-link to="/">
            <b-card
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
                Some quick example text to build on the card and make up the
                bulk of the card's content.
              </b-card-text>
            </b-card>
          </nuxt-link>
        </b-card-group>
      </div>
    </div>
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
