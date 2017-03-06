
<template>
    <div class="goods-checked">
        <h3>已选清单</h3>
        {{selectedList}}
        <div v-for="item in selectedList">
              <selected v-bind:list="item"></selected>
        </div>     
    </div>
</template>

<script>
import Selected from './Selected.vue';
import {mapState,mapGetters} from 'vuex';
  export default {
   computed :{
     
     ...mapGetters({
                selectedList : 'get_selected_model' 
            })
   },
    components : {
        Selected
    },
  };
</script>