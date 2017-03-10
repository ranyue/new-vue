/**
 * author: Yank
 * date: 2017-03-07
 * usage: ...
 */ 

<template>
	<div class='address-item' :class="{'red-border': addressItem.isDefault}">
		<div  :class="{'red-border-bottom': addressItem.isDefault}">
			<div>{{addressItem.name}}</div>
			<div><span @click='doEditAddress' >编辑</span>|<span @click='doDeleteAddress'>删除</span></div>
		</div>
		<div @click='setDefault'>
			<div>
				<div>所在地区</div>
				<div>地址</div>
				<div>手机</div>
			</div>
			<div>
				<div>{{addressItem.areaFullName}}</div>
				<div>{{addressItem.completeAddress}}</div>
				<div>{{addressItem.mobile}}</div>
			</div>
		</div>
		<div v-if='addressItem.isDefault' class='check'></div>
	</div>
</template>
<script>
	export default{
		name: 'Address',
		props: ['addressItem'],
		data (){
			return {
				
			}
		},
		computed: {
			
		},
		mounted(){
			
		},
		methods:{
			setDefault(){
				this.$store.dispatch('setDefaultAdd',this.addressItem.id)
			},
			doEditAddress(){
				this.$store.dispatch('doEditAddress', this.addressItem)
			},
			doDeleteAddress(){
				this.$store.dispatch('doDeleteAddress', this.addressItem)
			}
		}
	}
</script>
<style lang='scss' scoped>
		@import './../../style/common';
	.address-item{
		width: 345px;
		height:170px;
		margin-right: 40px;
		margin-bottom:20px;
		border:1px solid #e3e3e3;
		background-color: #fff;
		position: relative;
		>div{
			display: flex;
				padding:0 20px;
			&:nth-of-type(1){
				justify-content:space-between;
				height:35px;
			  line-height: 35px;
				border-bottom: 1px #e3e3e3 solid;
				>div{
					&:nth-of-type(2){
						font-size: 12px;
					}
				}		
			}
			&:nth-of-type(2){
				padding-top:20px;
				line-height: 30px;
				>div{
					&:nth-of-type(1){
						width: 70px;
						color:#666a73;
					}
					&:nth-of-type(2){
						
					}
				}
			}
		}
		.check{
			position: absolute;
			right:0;
			bottom:0;
			width: 25px;
			height:25px;
			padding:0;
			background-image:url(./../../assets/check.png);
			background-size: 100%;
		}
	}
	.red-border-bottom{
		border-bottom: 2px solid $baseColor !important;
	}
	.red-border{
		border: 2px solid $baseColor;
	}


</style>