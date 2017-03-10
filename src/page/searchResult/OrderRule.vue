<template>
        <ul class="rule">
            <li v-bind:class="{active : currentIndex == 1 }" v-on:click="handleOrderChange" data-index="1">默认排序</li>
            <li v-bind:class="{active : currentIndex == 2 }" v-on:click="handleOrderChange" data-index="2">销量</li>
            <li v-bind:class="{active : currentIndex == 3 }" v-on:click="handleOrderChange"  data-index="3">价格</li>
        </ul>
</template>

<script>
    export default {
        props :{
            currentIndex : {
             type : Number,
             required :true,
             default : 1
            }
        },
        methods : {
            handleOrderChange(e){
               let index =  Number(e.target.getAttribute("data-index"));
                this.$emit('orderChange',index);
            }
        }


    }
</script>
<style lang="scss">
    ul.rule{
        &:nth-of-type(1){
            display: flex;
            li{
                background:#3d3d3d;
                width:105px;
                height:36px;
                color: #fff; 
                display: flex;
                align-items: center;
                justify-content: center;
                font-size:16px;
                letter-spacing:0;
                line-height:16px;
                    cursor:pointer;
            }
            .active{
                background:#f1496f;
            }
        }
    }
</style>