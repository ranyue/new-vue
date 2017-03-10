<template>
    <div id="detail">
        <div class="top">
            <DetailTitle ></DetailTitle>
        </div>
        <div class="mid">
            <div class="left">
                <GoodsShow ></GoodsShow>
            </div>
            <div class="right">
                <GoodsData ></GoodsData>
                <GoodsModel></GoodsModel>
                <GoodsSelected ></GoodsSelected>
                <GoodsSubtotal ></goodsSubtotal>
            </div>
        </div>
       <div class="bottom">
           <GoodsSecondinfo></goodsSecondinfo>
           <GoodsPic ></GoodsPic>
       </div>
    </div>
</template>
<script>
    // 标题 一 二 三 级类目 和商品名称
    import DetailTitle from './DetailTitle.vue';
    // 商品图片展示及图片下方数据
    import GoodsShow from './goodsshow.vue';
    // 右侧 商品数据
    import GoodsData from './GoodsData.vue';
    // 商品各种规格型号数据
    import GoodsModel from './GoodsModel.vue';
    //已选清单及相关数量 以及价格
    import GoodsSelected from './GoodsSelected.vue';
    // 商品价格统计
    import GoodsSubtotal from './GoodsSubtotal.vue';
    // 下班部分商品数据展示
    import GoodsSecondinfo from './goodsSecondinfo.vue';
    // 页面底部商品大图片展示及空余部分使用公司宣传图片
    import GoodsPic from './GoodsPic.vue';
    import {API} from '../../api/api.js';
    import {mapState} from 'vuex';
    const url = API.productDetail;
    export default {
        name: 'Detail',
        components : {
            DetailTitle,
            GoodsShow,
            GoodsData,
            GoodsModel,
            GoodsSelected,
            GoodsSubtotal,
            GoodsSecondinfo,
            GoodsPic
        },
        //“productid”:”12345”, “start”:”0”, “num”:”10”，“tenantId”：“abcd”
        methods : {
            getGoodsData(){
                console.log(  this.$route.query.productid,"mounted");
                this.$store.dispatch('get_goods_detail', this.$route.query.productid);
            }
        },
       mounted : function(){
            // 获取数据
             this.getGoodsData();
             
        }
    }
</script>
<style lang="scss">
    #detail{
        padding-left: 20px;
        background-color: #fff;
        flex-wrap: wrap;
       .top{
           display: flex;
            width: 100%;
            padding: 34px 0 28px; 
       }
       .mid{
           display: flex;
           .left{
                width: 314px;
                margin-right: 20px;
           }
           .right{
               width: 791px;

           }
       }
       .bottom{
           display: flex;
            width: 100%;
            justify-content: center;
            flex-direction: column;
       }
    }
</style>









