<template>
    <div class="infoTitle">
            <ul>
                <li>商品信息</li>
                <li>价格</li>
                <li>操作</li>
            </ul>
        </div>
</template>

<script>
    export default {
        name : 'infoTitle'
    }
</script>

<style lang="scss">
     .infoTitle{
            padding-top: 31px;
            border-top:2px solid #f1496f;
            margin-bottom: 8px;
            ul{
                background:#ebebeb;
                border:1px solid #e3e3e3;
                width:1158px;
                height:41px;
                display: flex;
                align-items: center;
               >li{
                   font-size:12px;
                    color:#3d3d3d;
                    line-height:12px;
                   &:nth-of-type(1){
                        padding-left: 141px;
                   }
                   &:nth-of-type(2){
                        padding-left: 636px;
                   }
                    &:nth-of-type(3){
                        padding-left: 176px;
                   }
               }
            }
        }
</style>