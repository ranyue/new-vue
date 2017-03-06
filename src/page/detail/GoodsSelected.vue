
<template>
    <div class="goods-checked">
        <h3>已选清单</h3>
        <div v-for="item in selectedList">
              <selected v-bind:list="item"></selected>
        </div>     
    </div>
</template>

<script>
import Selected from './Selected.vue';
import {mapState} from 'vuex';
  export default {
  data(){
    return {
       selectedList : [],
    }
  },
   computed :{
     ...mapState({
         selectedList(state){
             let selectedList = [];
             for(let i =0;i< state.detail.good_model.length;i++){
                if( state.detail.good_model[i].selected){
                    selectedList.push( state.detail.good_model[i])
                }
             }
            return  selectedList;// 已选择的商品类型
        },
     })
   },
    components : {
        Selected
    },
  };
</script>