<template>
  <v-app>
      <div class="d-md-none">
        <TheHeader/>
        <nuxt/>
      </div>
  </v-app>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'

export default {
  components: {
    TheHeader,
  },
}
</script>


<style lang="scss">
html {
  //font-family: $font-josefinSans;
}
</style>
