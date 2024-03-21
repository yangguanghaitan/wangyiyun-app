<template>
  <div class="home">
    <topNav></topNav>
    <swipe></swipe>
  </div>
</template>

<script>
// @ is an alias to /src
import topNav from '@/components/home/topNav.vue'
import swipe from '@/components/home/swipe.vue'

export default {
  name: 'HomeView',
  components: {
    topNav,
    swipe,
  }
}
</script>
