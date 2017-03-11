<template>
    <div class="goods-selected-detail">
        <div>
            <span>{{list.specification}}</span>
        </div>
          <div>  
              <span>￥{{list.salesPrice}}</span>
          </div>
          <div>
              <el-input-number v-model="num" size="small" v-bind:min="1" v-on:change="handleBuyNum"></el-input-number>
          </div>
          <div v-on:click="handleClick">删除</div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
  export default {
    props :{
      list : {
        type:Object,
        required : true,
        default : {
          num : 1,
        }
      }
    },
    data(){
      return{
        num : this.list.num
      }
    },
    computed : {
        // num : {
        // set(value){
        //   this.$store.commit('HANDLE_BUY_NUM', {
        //       num : value,
        //       id : this.list.productId,
        //   })
        // }
      //}
    },
    methods : {
      // 删除对应商品
      handleClick :  function (){
        console.log('DELETE_SELECTED_MODEL',this.list.goodsSkuId);
        this.$store.commit('DELETE_SELECTED_MODEL',this.list.goodsSkuId);
        
      },
      // 更改 商品数量
      handleBuyNum : function(e){
        
        this.$store.commit('HANDLE_BUY_NUM',{
          num : e,
          id : this.list.goodsSkuId,
        })
      }
    }
  };
</script>

<style lang="scss">
  .goods-selected-detail{
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    >div{
      &:nth-of-type(1){
        width: 380px;
        display: flex;
        align-items: center;
        span{
           background:#ffffff;
            border:1px solid #e3e3e3;
            padding: 5px 10px 8px 11px;
            font-size:14px;
            color:#666a73;
        }
      }
      &:nth-of-type(2){
        display: flex;
        justify-content :center;
        align-items: center;
        margin-right: 50px;
        span{
          font-size:14px;
          color:#f1496f;
        }
      }
      &:nth-of-type(3){
        padding-right: 40px;
      }
      &:nth-of-type(4){
        font-size:14px;
        color:#9397a2;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor:pointer;
      
      }
    }
   
  }
 
</style>