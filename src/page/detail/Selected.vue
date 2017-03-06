<template>
        <div class="goods-selected-detail">
            <div>
                {{list.specification}}
            </div>
            <div>
                {{list.salesPrice}}
            </div>
            <div>
                <!--购买数量-->
                <el-input-number v-model="num"  @:click="handleBuyNum"></el-input-number>
                <div>{{list.num}}</div>
            </div>
            <button @:click="handleClick">删除</button>
        </div>
</template>

<script>
import {mapState} from 'vuex';
  export default {
    props :{
      list : {
        type:Object,
        required : true,
        default : {}
      }
    },
    computed : {
      ...mapState({
          num(state){
            for(let i in state.selected_model ){
              if(this.list.productId == state.selected_model[i].productId){
                return  state.selected_model[i].num
              }
            }
          }
      })
    },
    methods : {
      // 删除对应商品
      handleClick :  function (){
        this.$store.commit('DELETE_SELECTED_MODEL',{id :this.list.productId});
      },
      // 更改 商品数量
      handleByNum : function(){
        this.$store.commit('HANDLE_BUY_NUM',{
          num : this.num,
          id : this.list.productId,
        })
      }
    }
  };
</script>