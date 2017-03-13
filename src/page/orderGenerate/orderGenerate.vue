 /** * author: Yank * date: 2017-03-07 * usage: 订单提交页面 */


<template>
  <div class='order-generate'>
    <TheHeader></TheHeader>
    <OrderStatusBar currentStatus='2'></OrderStatusBar>
    <div class='main'>
      <div class='common-title'>确认订单信息</div>
      <div>
        <div>商品信息</div>
        <div>规格</div>
        <div>单价</div>
        <div>数量</div>
        <div>小计</div>
      </div>
      <div>
        <StoreItem v-for='(item, index) in cartinfo.carts' :store='item' :key='index'></StoreItem>
      </div>
      <div>
        <div class='common-title'>收货信息</div>
        <div>
          <AddressItem v-for='(item, index) in address.data' :addressItem='item' :key='index'></AddressItem>
        </div>
        <div :class="{'add-new-btn-unable' : showAddAddress}" @click='setVisibility'>新增收货地址</div>
        <AddAddress v-if='showAddAddress'  :address='editAddress'></AddAddress>
      </div>
      <div>
        <div>
          <div>合计金额：<span class='theme-color'>&yen;{{cartinfo.totlePrices}}</span></div>
          <div>共 <span class='theme-color'>{{cartinfo.totleNum}}</span> 件 包含运费</div>
        </div>
        <div @click='doOrderSubmit'>
          提交订单
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import TheHeader from './../../components/header/index.vue'
  import OrderStatusBar from './../../components/common/orderStatusBar.vue';
  import StoreItem from './storeItem.vue';
  import AddressItem from './address.vue';
  import AddAddress from './addAddress.vue';
  import {
    GetSessionStorageObj
  } from './../../utils/utils';
  export default {
    name: 'OrderGenerate',
    props: [],
    components: {
      TheHeader,
      OrderStatusBar,
      StoreItem,
      AddressItem,
      AddAddress
    },
    data() {
      return {

      }
    },
    computed: {
      showAddAddress(){
        return this.$store.state.ordergenerate.showAddAddress
      },
      cartinfo() {
        return this.$store.state.ordergenerate.orderInfo
      },
      address() {
        return this.$store.state.ordergenerate.address
      },
      editAddress(){
        return this.$store.state.ordergenerate.editAddress
      }
    },
    created() {
      this.initOrderData()
    },
    mounted() {

    },
    methods: {
      initOrderData() {
        this.$store.dispatch('initOrderData');
      },
      doOrderSubmit() {
        let storeInfo = [];
        this.cartinfo.carts.forEach((item, index) => {
          let items = '';
          item.list.forEach((secItem, index) => {
            items += secItem.goodsSkuId + ':' + secItem.goodsNum + ';'
          })
          items = items.slice(0, items.length - 1);
          let obj = {
            isRegister: item.isRegister,
            remark: item.remark,
            items: items
          };
          storeInfo.push(obj);
        })
        let cartsId = GetSessionStorageObj('cartsId')
        this.$store.dispatch('doOrderSubmit', {
          addressId: this.$store.state.ordergenerate.addressId,
          cartId: cartsId,
          storeInfo: storeInfo,
          router: this.$router
        })
      },
      setVisibility(){
         this.$store.dispatch('doShowAddAddress',1);
      },
      setInVisibility(){
        this.addNewBtn = false
      }
    }
  }

</script>
<style lang='scss' scoped>
  @import './../../style/common';
  .order-generate {
    .main {
      >div {
        &:nth-of-type(1) {}
        &:nth-of-type(2) {
          display: flex;
          text-align: center;
          background-color: #ebebeb;
          line-height: 43px;
          >div {
            &:nth-of-type(1) {
              width: 431px;
            }
            &:nth-of-type(2) {
              width: 145px;
            }
            &:nth-of-type(3) {
              width: 170px;
            }
            &:nth-of-type(4) {
              width: 170px;
            }
            &:nth-of-type(5) {
              width: 200px;
            }
          }
        }
        &:nth-of-type(4) {
          margin-top: 20px;
          >div {
            &:nth-of-type(2) {
              display: flex;
              flex-wrap: wrap;
            }
            &:nth-of-type(3) {
              width: 110px;
              height: 30px;
              background-color: $baseColor;
              color: #fff;
              line-height: 30px;
              border-radius: 4px;
              text-align: center;
              margin: 10px 0;
            }
          }
        }
        &:nth-of-type(5) {
          height: 90px;
          display: flex;
          background-color: #fff;
          margin-top: 15px;
          border-radius: 5px;
          align-items: center;
          justify-content: flex-end;
          >div {
            margin-right: 30px;
            &:nth-of-type(1) {
              >div {
                &:nth-of-type(1) {
                  >span {
                    font-size: 24px;
                  }
                }
              }
            }
            &:nth-of-type(2) {
              background: $baseColor;
              width: 120px;
              height: 42px;
              text-align: center;
              line-height: 42px;
              color: #fff;
            }
          }
        }
      }
      .common-title {
        padding-left: 10px;
        line-height: 30px;
        font-size: 16px;
        color: #3d3d3d;
      }
      .add-new-btn-unable{
        background-color: #9397a2 !important;
      }
    }
  }

</style>
