
/**
 * author: Yank
 * date: 2017-03-06
 * usage: 购物车样式逻辑完善，不足之处等待QA
 */ 



<template>
  <div  v-if="productlist"  class="cart">
    <TheHeader></TheHeader>
    <OrderStatusBar currentStatus='1'></OrderStatusBar>
    <div v-if="productlist.hasOwnProperty('carts')" class="cart-main">
      <div>
        全部商品（<span>{{productlist.totleNum}}</span>）
      </div>
      <div>
        <div>
          <el-checkbox v-model="flag.isSelected" @change='doSelectCart'>全选</el-checkbox>
        </div>
        <div>商品信息</div>
        <div>单价</div>
        <div>数量</div>
        <div>小计</div>
        <div>操作</div>
      </div>
      <div>
        <StoreItem v-for='(store, index) in productlist.carts' :key='index' :store='store'></StoreItem>
      </div>
      <div>
        <div>
          <div>
            <el-checkbox v-model="flag.isSelected" @change='doSelectCart'>全选</el-checkbox>
          </div>
          <span @click='doCartDelete'>删除选中的商品</span>
          <span @click='doClearUnSales'>清除失效商品</span>
        </div>
        <div>
          <div>已选择<span>{{productlist.totleNum}}</span>件商品</div>
          <div>总价（不含运费）： <span>&yen;{{productlist.totlePricesNoFreight}}</span></div>
          <div @click='getOrderData' v-bind:class="{ 'has-selected' : flag.hasSelected }">结算</div>
        </div>
      </div>
    </div>
    <div v-else class='none-cart'>
    </div>
  </div>
  
</template>
<script>
  import TheHeader from './../../components/header/index.vue'
  import OrderStatusBar from './../../components/common/orderStatusBar.vue';
  import StoreItem from './storeItem.vue';
  import {
    SetSessionStorageObj
  } from './../../utils/utils';
  export default {
    name: 'Cart',
    components: {
      TheHeader,
      OrderStatusBar,
      StoreItem
    },
    data() {
      return {
      }
    },
    computed: {
      productlist() {
        return this.$store.state.shopcart.cartlist
      },
      flag() {
        let flag = {
          isSelected: true,
          hasSelected: false
        };
        if(this.$store.state.shopcart.cartlist.carts){
          this.$store.state.shopcart.cartlist.carts.forEach((item, index) => {
            item.list.forEach((secItem, index) => {
              secItem.isSelected == 0 ? flag.isSelected = false : '';
              secItem.isSelected == 1 ? flag.hasSelected = true : ''
            })
          })
        }
        
        return flag
      }
    },
    created() {
      this.initCartData()
    },
    methods: {
      initCartData() {
        this.$store.dispatch('initCartData');
      },
      doSelectCart() {
        this.$store.dispatch('doSelectGood', {
          cartId: '',
          type: 3,
          isSelected: this.flag.isSelected
        })
      },
      doCartDelete() {
        let cartId = '';
        this.productlist.carts.forEach((item, index) => {
          item.list.forEach((secItem, index) => {
            secItem.isSelected == 1 && secItem.status == 0 ? cartId += secItem.cartId + ':' : ''
          })
        })
        cartId = cartId.slice(0, cartId.length - 1)
        this.$store.dispatch('doCartDelete', cartId)

      },
      doClearUnSales() {
        let cartId = '';
        this.productlist.carts.forEach((item, index) => {
          item.list.forEach((secItem, index) => {
            secItem.status == 1 ? cartId += secItem.cartId + ':' : ''
          })
        })
        cartId = cartId.slice(0, cartId.length - 1)
        this.$store.dispatch('doCartDelete', cartId)
      },
      getOrderData() {
        let items = '';
        let cartsId = '';
        this.productlist.carts.forEach((item, index) => {
          item.list.forEach((secItem, index) => {
            secItem.isSelected == 1 && secItem.status == 0 ? items += secItem.goodsSkuId + ':' + secItem.goodsNum +';' : ''
            secItem.isSelected == 1 && secItem.status == 0 ? cartsId += secItem.cartId + ':' : ''
          })
        })
        items = items.slice(0, items.length - 1);
        cartsId = cartsId.slice(0, cartsId.length - 1);
        SetSessionStorageObj('cartsId', cartsId);
        if (items) {
          this.$store.dispatch('getOrderData', {
            items: items,
            router: this.$router
          })
        }

      }
    }
  }

</script>
<style lang='scss' scoped>
  @import './../../style/common';
  .cart {
    .cart-main {
      >div {
        &:nth-of-type(1) {
          font-size: 14px;
          padding-left: 10px;
          margin-bottom: 10px;
          >span {
            color: $baseColor;
          }
        }
        &:nth-of-type(2) {
          display: flex;
          justify-content: space-between;
          background: #ebebeb;
          height: 43px;
          align-items: center;
          margin-bottom: 10px;
          >div {
            &:nth-of-type(1) {
              padding-left: 10px;
              width: 151px;
              >input {
                background: #fff;
                border: 1px solid #3d3d3d;
              }
            }
            &:nth-of-type(2) {
              width: 497px;
            }
            &:nth-of-type(3) {
              width: 150px;
            }
            &:nth-of-type(4) {
              width: 130px;
            }
            &:nth-of-type(5) {
              width: 140px;
            }
            &:nth-of-type(6) {
              width: 110px;
              padding-right: 10px;
            }
          }
        }
        &:nth-of-type(4) {
          height: 43px;
          line-height: 43px;
          padding-left: 15px;
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          background-color: #e3e3e3;
          >div {
            display: flex;
            &:nth-of-type(1) {
              >span {
                margin-left: 20px;
                &:hover {
                  color: $baseColor;
                }
              }
            }
            &:nth-of-type(2) {
              >div {
                span {
                  color: $baseColor;
                }
                &:nth-of-type(1) {
                  margin-right: 30px;
                }
                &:nth-of-type(3) {
                  height: 100%;
                  background-color: #9397a2;
                  color: #fff;
                  width: 116px;
                  text-align: center;
                  margin-left: 20px;
                }
              }
            }
          }
        }
      }
      .has-selected {
        background-color: $baseColor !important;
      }
    }
    .none-cart {
      height: 300px;
      background-image: url(./../../assets/emptyCart.png);
      background-repeat: no-repeat;
      background-position: center;
    }
  }

</style>