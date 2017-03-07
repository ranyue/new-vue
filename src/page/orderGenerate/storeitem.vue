/**
 * author: Yank
 * date: 2017-03-07
 * usage: ...
 */ 
<template>
	<div class='order-generate-store'>
		<div>{{store.storeName}}</div>
		<div>
			<GoodsItem v-for='(goods, index) in store.list' :goods='goods' :key='index'></GoodsItem>
		</div>
		<div>
			<div>
				买家留言： <textArea :value='remark' @change='doRemark'></textArea>
			</div>
			<div>
				<el-checkbox v-model='isRegister'  @change='doIsRegister'>是否需要注册证</el-checkbox>
			<br/>
				配送方式： 快递 <span>&yen; 10.00</span>
			</div>
		</div>
	</div>
</template>
<script>
	import GoodsItem from './goodsItem'
	export default{
		name: 'StoreItem',
		props: ['store'],
		components:{GoodsItem},
		data (){
			return {
				
			}
		},
		computed: {
			isRegister(){
				return Boolean(this.store.isRegister)
			},
			remark(){
				return this.store.remark
			}
		},
		mounted(){
			
		},
		methods:{
			doIsRegister(){
				this.$store.dispatch('setIsRegister', {
					store:this.store,
					isRegister: !this.isRegister
				});
			},
			doRemark(e){
				this.$store.dispatch('setRemark', {
					store:this.store,
					remark: e.target.value
				});
			}
		}
	}
</script>
<style lang='scss' scoped>
	.order-generate-store{
		>div{
			&:nth-of-type(1){
				line-height: 43px;
				color:#3d3d3d;
			}
			&:nth-of-type(3){
				display: flex;
				height:100px;
				
				border:1px solid #e3e3e3;
				>div{
					flex:1;
					background:#f4f4f4;
				  padding: 20px 30px;
					&:nth-of-type(1){
						display: flex;
						align-items: flex-start;
						border-right: 1px solid #e3e3e3;
						>textArea{
							width:355px;
							height:60px;
						}
					}
					&:nth-of-type(2){
						text-align: right;
					}
				}
			}
			&:nth-of-type(4){

			}

		}
	}


</style>