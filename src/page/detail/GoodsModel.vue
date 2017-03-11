
<template>
    <div class="model">
        <h3>规格型号</h3>
       <ul>
         <ModelButton 
         v-for="(item,index) in model" 
         v-on:selected_models_change="handleModelChange" 
         v-bind:value="item"
         :key="index"
         v-bind:class="{selectedStyle : item.selected}"
         ></ModelButton>
       </ul>
       
    </div>
    
</template>
<script>
// 数据为请求过来的型号
import {mapState,mapGetters} from 'vuex';
import ModelButton from './ModelButton.vue';
  export default {
    name : 'goodsModel',
   computed : {
             model(){  
                return  this.$store.state.detail.goods_model
            }, 
            ...mapGetters({
                selectedLists : 'get_selected_model' 
            })
        },
    methods: {
      handleModelChange(id) {
        this.$store.commit('CHANGE_GOODS_MODEL',id);
        console.log('CHANGE_GOODS_MODEL',id);
      }
    },
    components : {
      ModelButton
    }
  }

</script>
<style lang="scss">
  .model{
    display: flex;
    padding-top: 29px;
    h3{
      font-size:14px;
      color:#666a73;
      padding-right: 24px;
      text-align:left;
    }
    ul{ 
      display: flex;
      >li{
        margin-right: 20px;
      }
        .selectedStyle {   
          background-image :url('../../assets/check.png');
          background-size :25%;
          border-color:#f1496f;
          background-repeat :no-repeat;
          background-position: 100% 100%;
            div{
                color : #f1496f;
            }       
        }
    }
  }
</style>