<template>
 <div>
   <TypeNav/>
   <ListContainer/>
   <TodayRecommend/>
   <Rank/>
   <Like/>
   <Floor v-for="floor in floorList" :key="floor.id" :floor="floor" />
   <Brand/>
 </div>
</template>

<script>
import ListContainer from './ListContainer/ListContainer.vue'
import Brand from './Brand/Brand.vue'
import Floor from './Floor/Floor.vue'
import Like from './Like/Like.vue'
import Rank from './Rank/Rank.vue'
import TodayRecommend from './TodayRecommend/TodayRecommend.vue'
import {mapState} from 'vuex'
 export default {
   data() {
     return {

     }
   },
   mounted() {
     this.$store.dispatch('get_floorList')
   },
   computed:{
     ...mapState({
       floorList: state => state.home.floorList
     })
   },
   components:{
     ListContainer,
     Brand,
     Floor,
     Like,
     Rank,
     TodayRecommend
   }
 }
</script>

<style scoped>

 
</style>
