<template>
  <section class="container">
    <div class="col-12 text-center">
      <h1 clas="py-3" />
    </div>
    <div class="col-12 my-5">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          :src="
            'https://player.twitch.tv/?channel=' +
              $route.params.id +
              '&autoplay=true'
          "
          height="720"
          width="1280"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss"></style>
