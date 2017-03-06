
/**
 * author: Yank
 * date: 2017-03-06
 * usage: 将所需渲染的 以store为单位 状态数据填入 ， 进行toggle操作
 */ 


<template>
	<div class='store-item'>
		<div><el-checkbox v-model="isSelected" @change='doSelectStore'>{{store.storeName}}</el-checkbox></div>
		<div>
			<GoodsItem v-for='(goods, index) in store.list' :goods='goods' :key='index'></GoodsItem>
		</div>
		<div>
			共{{store.storeNum}}件&ensp;&ensp;合计 &yen;{{store.storeAmount}}
		</div>
	</div>
</template>
<script>
	import GoodsItem from './../../components/common/GoodsItem.vue';

	export default{
		name: 'StoreItem',
		props: ['store'],
		components: {GoodsItem},
		data (){
			return {
				
			}
		},
		computed: {
			isSelected(){
				let isSelected = true;
				this.store.list.map((item,index)=>{
					item.isSelected==0?isSelected = false:''
				})
				return isSelected
			}
		},
		mounted(){
			
		},
		methods:{
			doSelectStore(){
				this.$store.dispatch('doSelectGood', {
			          cartId: this.store.id,
			          type: 2,
			          isSelected: !this.isSelected
			        })
			}
		}
	}
</script>
<style lang='scss' scoped>

	.store-item{
		>div{
			&:nth-of-type(1){
				height: 32px;
				line-height:32px;
				padding-left:15px;
			}
			&:nth-of-type(3){
				height: 36px;
				line-height: 36px;
				background-color: #fff;
				border: 1px solid #e3e3e3;
				text-align: right;
				padding-right:80px;
				font-family:PingFangSC-Regular;
				font-size:14px;
				color:#3d3d3d;
				letter-spacing:0;
			}
		}
	}

</style>