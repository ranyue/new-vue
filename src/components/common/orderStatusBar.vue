
/**
 * author: Yank
 * date: 2017-03-06
 * usage: 将所需改变的状态数据填入，进行操作  1 : 我的购物车   2： 提交订单   3 ： 订单完成
 */ 



<template>
	<div class='order_status_bar'>
		<div>我的购物车</div>
		<div>
			<div v-bind:class="[currentStatus==1?'order-status-active':'',currentStatus==2?'order-status-active':'',currentStatus==3?'order-status-active':'']"><span>1</span>我的购物车</div>
			<div v-bind:class="[currentStatus==2?'order-status-active':'',currentStatus==3?'order-status-active':'']"><div></div><span>2</span>提交订单</div>
			<div v-bind:class="[currentStatus==3?'order-status-active':'']"><div></div><span>3</span>订单完成</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'OrderStatusBar',
		props: ['currentStatus'],
		data (){
			return {
				
			}
		},
		computed: {
			
		},
		mounted(){
			
		},
		methods:{
			
		}
	}
</script>
<style lang='scss' scoped>
	.order_status_bar {
		display: flex;
		height:50px;
		max-width: 1160px;
		background-color: #fff;
		justify-content: space-between;
		padding:0 15px;
		border:1px solid #e3e3e3;
		margin: 37px auto;
		>div{
			line-height: 50px;
			&:nth-of-type(1){
				font-size: 18px;
			}
			&:nth-of-type(2){
				display: flex;
				font-size: 14px;
				>div{
					display: flex;
					align-items:center;
					margin:0 5px;
					>div{
						width: 30px;
						height:2px;
						background-color: #9397a2;
					}
					>span{
						display: inline-block;
						width:20px;
						height:20px;
						color:#fff;
						border-radius:50%;
						background-color:#9397a2;
						margin:0 5px;
						line-height: 20px;
						text-align: center;
					}
				}
				.order-status-active{
					color:#f6a623;
					>span{
						background-color: #f6a623;
					}
					>div{
						background-color: #f6a623;
					}
				}
			}


		}

	}


</style>