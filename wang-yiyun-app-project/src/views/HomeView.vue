<template>
  <div class="home">
    <topNav></topNav>
    <swipe></swipe>
    <iconList></iconList>
    <musicList></musicList>
  </div>
</template>

<script>
// @ is an alias to /src
import topNav from '@/components/home/topNav.vue'
import swipe from '@/components/home/swipe.vue'
import iconList from '@/components/home/iconList.vue'
import musicList from '@/components/home/musicList.vue'

export default {
  name: 'HomeView',
  components: {
    topNav,
    swipe,
    iconList,
    musicList,
  }
}
</script>
