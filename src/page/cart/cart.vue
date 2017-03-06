
/**
 * author: Yank
 * date: 2017-03-06
 * usage: 购物车样式逻辑完善，不足之处等待QA
 */ 



<template>
	<div  v-if="productlist"  class="cart">
		<OrderStatusBar currentStatus='1'></OrderStatusBar>
		<div   class="cart-main">
			<div>
				全部商品（<span>{{productlist.totleNum}}</span>）
			</div>
			<div >
				<div><el-checkbox v-model="flag.isSelected" @change='doSelectCart'>全选</el-checkbox></div>
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
					<span @click='doCartDelete' >删除选中的商品</span>
					<span @click='doClearUnSales'>清除失效商品</span>
				</div>
				<div>
					<div>已选择<span>{{productlist.totleNum}}</span>件商品</div>
					<div>总价（不含运费）： <span>&yen;{{productlist.totlePricesNoFreight}}</span></div>
					<div v-bind:class="{ 'has-selected' : flag.hasSelected }">结算</div>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		<OrderStatusBar currentStatus='1'></OrderStatusBar>
	</div>
</template>
<script>
	import  OrderStatusBar from './../../components/common/orderStatusBar.vue';
	import  StoreItem from './storeItem.vue';
	import { mapMutations } from 'vuex';
	 import {queryCartList, selectGood, cartDelete} from '../../api/api.js';
	export default{
		name: 'Cart',
		components: {OrderStatusBar, StoreItem},
		data (){
			return {
			
			}
		},
		computed: {
			productlist(){
				return this.$store.state.shopcart.cartlist
			},
			hasSelected(){
				return null
			},
			flag(){
				let flag = {
					isSelected: true,
					hasSelected: false
				};
				//let hasSelected = false;
				console.log(this.$store.state.shopcart)
				this.$store.state.shopcart.cartlist.carts.forEach((item,index)=>{
					item.list.forEach((secItem, index)=>{
						secItem.isSelected==0?flag.isSelected = false:'';
						secItem.isSelected==1?flag.hasSelected = true:''
					})
				})
				return flag
			}
		},
		created(){
			this.initCartData()
		},
		methods:{
			...mapMutations([
				'INITCART'
			]),
			initCartData(){
				this.$store.dispatch('initCartData');

				// queryCartList().then((res)=>{
				// 	if(res.code === 'A0000'){
				// 		this.INITCART(res);
				// 	}
				// })
			},
			doSelectCart(){
				this.$store.dispatch('doSelectGood', {
          cartId: '',
          type: 3,
          isSelected:this.flag.isSelected
        })

				// selectGood('', 3, this.flag.isSelected).then((res)=>{
				// 	if (res.code == 'A0000') {
        //     this.INITCART(res.data)
        //   }
				// })
			},
			doCartDelete(){
				let cartId = '';
				this.productlist.carts.forEach((item,index)=>{
					item.list.forEach((secItem, index)=>{
						secItem.isSelected ==1&&secItem.status==0?cartId+= secItem.cartId+ ':':''
					})
				})
				cartId = cartId.slice(0,cartId.length-1)
				console.log(cartId)

				this.$store.dispatch('doCartDelete',  cartId)

				// cartDelete(cartId).then((res) => {
        //   if (res.code == 'A0000') {
        //     this.INITCART(res.data)
        //   }
        // })
			},
			doClearUnSales(){
				let cartId = '';
				this.productlist.carts.forEach((item,index)=>{
					item.list.forEach((secItem, index)=>{
						secItem.status==1?cartId+= secItem.cartId+ ':':''
					})
				})
				cartId = cartId.slice(0,cartId.length-1)
				console.log(cartId)
				this.$store.dispatch('doCartDelete',  cartId)
			
				// cartDelete(cartId).then((res) => {
        //   if (res.code == 'A0000') {
        //     this.INITCART(res.data)
        //   }
        // })
			}
		}
	}
</script>
<style lang='scss' scoped>
	@import './../../style/common';
  .cart{
		.cart-main{
			>div{
				&:nth-of-type(1){
					font-size: 14px;
					padding-left:10px;
					margin-bottom:10px;
					>span{
						color:$baseColor;
					}
				}
				&:nth-of-type(2){
					display: flex;
					justify-content: space-between;
					background: #ebebeb;
					height:43px;
					align-items:center;
					margin-bottom: 10px;
					>div{
						&:nth-of-type(1){
							padding-left: 10px;
							width: 151px;
							>input{
								background: #fff;
								border: 1px solid #3d3d3d;
							}
						}
						&:nth-of-type(2){
							width: 497px;
						}
						&:nth-of-type(3){
							width: 150px;
						}
						&:nth-of-type(4){
							width: 130px;
						}
						&:nth-of-type(5){
							width: 140px;
						}
						&:nth-of-type(6){
							width: 110px;
							padding-right: 10px;
						}
					}
				}
				&:nth-of-type(4){
					height:43px;
					line-height: 43px;
					padding-left: 15px;
					display: flex;
					justify-content: space-between;
					font-size: 12px;
					background-color: #e3e3e3;
					>div{
						display: flex;
						&:nth-of-type(1){
							>span{
								margin-left:20px;
								&:hover{
									color:$baseColor;
								}
							}
						}
						&:nth-of-type(2){
							>div{
								span{
										color:$baseColor;
								}
								&:nth-of-type(1){
									margin-right: 30px;	
								}
								&:nth-of-type(3){
									height: 100%;
									background-color: #9397a2;
									color:#fff;
									width: 116px;
									text-align: center;
									margin-left: 20px;
								}


							}
						}
					}
				}
			}
			.has-selected{
				background-color: $baseColor !important;
			}
		}
	}
</style>