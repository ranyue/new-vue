<!--页面下方图片展示区域-->
<template>
    <div class="buttomImg">
        <div  v-for ="(list,index) in imgList" v-bind:key="index">
            <img  v-bind:src="list" alt="">
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
          computed : 
            mapState({
                imgList(state){
                        return state.detail.goods_image.imgList;//小图
                },

            })
        ,
    }
</script>

<style lang="scss">
    .buttomImg{
        display: flex;
        justify-content: center;
        div{
            background:#f4f4f4;
            border:1px solid #e3e3e3;
            margin-top: 20px;
            img{
                width: 100%;
            }
        }
       
    }
</style>