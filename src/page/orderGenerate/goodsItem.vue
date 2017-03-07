/**
 * author: Yank
 * date: 2017-03-07
 * usage: ...
 */ 
<template>
  <div class='order-generate-store-item'>
    <div>
      <div>
        <img :src='goods.goodsImage' alt="">
      </div>
      <div>{{goods.goodsName}}</div>
    </div>
    <div>{{goods.specification}}</div>
    <div>&yen; {{goods.goodsPriceString}}</div>
    <div>{{goods.goodsNum}}</div>

    <div>&yen; {{goods.goodsTotlePrice}}</div>
  </div>
</template>
<script>
  export default {
    name: 'goodsItem',
    props: ['goods'],
    data() {
      return {

      }
    },
    computed: {

    },
    mounted() {

    },
    methods: {

    }
  }

</script>
<style lang='scss' scoped>
  @import './../../style/common.scss';
  .order-generate-store-item {
    display: flex;
    height: 141px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #e3e3e3;
    text-align: center;
    >div {
      &:nth-of-type(1) {
        width: 431px;
        display: flex;
        >div {
          &:nth-of-type(1) {
            border:1px solid #e3e3e3;
            width: 100px;
            height:100px;
            margin-right:15px;
            >img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      &:nth-of-type(2) {
        width: 145px;
      }
      &:nth-of-type(3) {
        width: 170px;
        color: $baseColor;
      }
      &:nth-of-type(4) {
        width: 170px;
      }
      &:nth-of-type(5) {
        width: 200px;
        color: $baseColor;
      }
    }
  }

</style>
