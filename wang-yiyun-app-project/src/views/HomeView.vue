<template>
  <div class="home">
    <topNav></topNav>
    <swipe></swipe>
    <iconList></iconList>
  </div>
</template>

<script>
// @ is an alias to /src
import topNav from '@/components/home/topNav.vue'
import swipe from '@/components/home/swipe.vue'
import iconList from '@/components/home/iconList.vue'

export default {
  name: 'HomeView',
  components: {
    topNav,
    swipe,
    iconList,
  }
}
</script>
