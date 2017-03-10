// 商品头部标签及数据显示
//  所有数据根据查询的数据渲染，对应插入
 

<template>
    <div class="goodsData">
        <h3>{{goodsData.name}}</h3>
        <i>{{goodsData.subtitle}}</i>
        <div>
            <div class="priceContent">
                <div class="goods_info">
                    <span>促销价</span><span class="lowerPrice">{{model[0].salesPrice}}</span>
                    <span v-if="model[0].agreePrice">协议价</span>
                </div>
                <div class="goods_info" >
                    <span>市场价</span><span>{{Math.floor(model[0].salesPrice*1.1)}}￥</span>
                </div>
                
            </div>
            <div class="dataContent">
                 <div class="goods_info" v-if="goodsData.brandName">
                    <span>品牌</span><span>{{goodsData.brandName}}</span>
                </div>
                <div class="goods_info" v-if="goodsData.register">
                    <span>注册证号</span><span>{{goodsData.register}}</span>
                </div>
                <div class="goods_info" v-if="goodsData.saledNumber">
                    <span>销售量</span><span>{{goodsData.saledNumber}}</span>
                </div>
                <div class="goods_info" v-if="goodsData.storeName">
                    <span>供应商</span><span>{{goodsData.storeName}}</span>
                </div>
            </div> 
          
       
        </div>
    </div>
</template>
<script>
    import {mapState, mapGetters} from 'vuex';
    export default {
        computed : {
             model(){  
                return  this.$store.state.detail.goods_model;
            },  
            ...mapState({
                goodsData(state){
                    return state.detail.goods_data;
                },
                // model(state){
                //     // 应根据 选中的商品来显示，默认第一个
                //     return state.detail.goods_model;  
                // },
            }),
            ...mapGetters({
                selectedLists : 'get_selected_model' 
            })
        }
    }
</script>
<style lang="scss">
    .goodsData {
        display: flex;
        flex-direction: column;
        h3{
            font-size:18px;
            color:#3d3d3d;
            text-align:left;
            padding-bottom: 6px;
        }
        i{
            font-size:14px;
            color:#3d3d3d;
            text-align:left;
            padding-bottom: 20px;
        }
        >div{
            background:#f7f7f7;
            width:791px;
            height:130px;
            display: flex;
           align-items: center;
           
            .priceContent{
                height: 90px;
                width: 263px;
                border-right: 1px solid #e3e3e3;
                display: flex;
                flex-direction: column;
                align-items: center;
                // justify-content: center;
                padding-top: 20px;
                div{
                    span{
                        font-size:14px;
                        color:#666a73;
                        line-height:14px;
                        text-align:left;
                    }
                    .lowerPrice{
                        font-size:32px;
                        color:#f1496f;
                        line-height:32px;
                        text-align:left;
                    }
                     &:nth-of-type(2){
                        >span{
                            &:nth-of-type(2){
                                text-decoration: line-through;
                            }
                        }
                        
                    }
                   
                }
                
               
               
            }
           
            .dataContent{
                padding-left: 82px;
               
                display: flex;
                flex-direction: column;
          
                div{
                    display: flex;

                    span:nth-of-type(1){
                        font-size:14px;
                        color:#666a73;
                        line-height:24px;
                        text-align:left;
                        width: 78px;
                    }
                    span:nth-of-type(2){
                        font-size:14px;
                        color:#666a73;
                        line-height:24px;
                        text-align:left;
                    }
                }
            }
            
        }
    }
</style>
