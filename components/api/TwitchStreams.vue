<template>
  <div id="app">
    <div class="wrapper">
      <div class="row">
        <ul>
          <li v-for="joke in jokes" :key="joke.id">
            <div>{{ joke.joke }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  props: ["jokes"]
}
</script>

<style lang="scss"></style>
