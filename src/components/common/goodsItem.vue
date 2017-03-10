 /**
  * author: Yank 
  * date: 2017-03-06 
  * usage: 将所需改变的props数据填入，进行操作
   */


<template>
  <div class="goods-item" :class='{unsale:goods.status}'>
    <div>
      <el-checkbox v-if='!goods.status' v-model="isSelected" @change='doSelectGood'></el-checkbox>
      <p v-else>失效</p>
      <div>
        <img :src="goods.goodsImage" alt="">
      </div>
    </div>
    <div>
      <div class='ellipsis-3'>{{goods.goodsName}}</div>
      <div class='ellipsis-3'> 规格：{{goods.specification}}</div>
    </div>
    <div>
      <div v-if='!goods.status' :class='{unPrice: true}'>&yen;{{goods.originalCost}}</div>
      <div v-else></div>

      <div v-if='!goods.status'>&yen;{{goods.goodsPriceString }}</div>
      <div v-else></div>
    </div>
    <div>
      <el-input-number v-if='!goods.status' size="small" v-model="yank.num" :min='goods.batchNumber' :max='goods.stock' @change='changeGoodsNum'></el-input-number>
      <div v-else></div>
    </div>
    <div v-if='!goods.status'>&yen;{{goods.goodsTotlePrice}}</div>
    <div v-else></div>
    <div><span @click='doCartDelete'>删除</span></div>
  </div>
</template>
<script>


  export default {
    name: 'GoodsItem',
    props: ['goods'],
    components: {},
    data() {
      return {
        yank: {
          num: this.goods.goodsNum
        }
      }
    },
    computed: {
      isSelected() {
        return Boolean(this.goods.isSelected)
      }
    },
    mounted() {

    },
    methods: {
      changeGoodsNum(value) {
        this.$store.dispatch('changeGoodsNum', {
          cartId: this.goods.cartId,
          value: value
        })
      },
      doCartDelete() {
        this.$store.dispatch('doCartDelete', this.goods.cartId)
      },
      doSelectGood() {
        this.$store.dispatch('doSelectGood', {
          cartId: this.goods.cartId,
          type: 1,
          isSelected: !this.isSelected
        })
      }
    }
  }

</script>
<style lang='scss' scoped>
  .goods-item {
    display: flex;
    justify-content: space-between;
    height: 140px;
    padding: 20px 0;
    background-color: #fff;
    border-top: #e3e3e3 solid 1px;
    font-size: 14px;
    >div {
      &:nth-of-type(1) {
        padding-left: 15px;
        width: 151px;
        display: flex;
        justify-content: space-between;
        >p {
          margin-top: 44px;
          font-size: 12px;
          width: 25px;
          height: 14px;
          color: #666a73;
          background-color: #e3e3e3;
        }
        >div {
          width: 100px;
          height: 100px;
          border: 1px solid #e3e3e3;
          >img {
            width: 98px;
            height: 98px;
          }
        }
      }
      &:nth-of-type(2) {
        width: 497px;
        display: flex;
        >div {
          padding: 0 10px;
          &:nth-of-type(1) {
            width: 280px;
          }
          &:nth-of-type(2) {
            width: 210px;
          }
        }
      }
      &:nth-of-type(3) {
        width: 150px;
        .unPrice {
          text-decoration: line-through;
        }
      }
      &:nth-of-type(4) {
        width: 130px;
        .el-input-number--small {
          width: 110px;
        }
        .el-input-number--small .el-input__inner {
          padding-right: 60px;
        }
      }
      &:nth-of-type(5) {
        width: 140px;
        color: #f1496f;
      }
      &:nth-of-type(6) {
        width: 110px;
        padding-right: 10px;
      }
    }
  }
  
  .unsale {
    background-color: #f7f7f7;
  }

</style>
