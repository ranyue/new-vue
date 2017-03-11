
<template>
    <div class="goods-selected">
        <h3>已选清单</h3>
     
        <div >
              <selected v-bind:list="item" v-for="item in selectedList"></selected>
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

<style lang="scss">
    .goods-selected{
        display:  flex;
        margin-top: 20px;
       flex-wrap: wrap;
        >h3{
            padding-right: 24px;
        }
        >div{
            display: flex;
            flex-direction: column;
        }
    }
</style>