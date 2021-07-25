<template>
 <div>
   <TypeNav/>
   <ListContainer/>
   <TodayRecommend/>
   <Rank/>
   <Like/>
   <Floor/>
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
 export default {
   data() {
     return {

     }
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
