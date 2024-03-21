<template>
  <div class="home">
    <topNav></topNav>
    <testButtonVant></testButtonVant>
  </div>
</template>

<script>
// @ is an alias to /src
import topNav from '@/components/home/topNav.vue'
import testButtonVant from '@/components/home/testButtonVant.vue'

export default {
  name: 'HomeView',
  components: {
    topNav,
    testButtonVant,
  }
}
</script>
