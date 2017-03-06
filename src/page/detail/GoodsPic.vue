<!--页面下方图片展示区域-->
<template>
    <div>
        
        <img 
            v-for ="list in imgList"
        v-bind:src="list" alt="">
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