

<template>
    <div class="secondInfo">
        <ul>
            <li v-if="second_info.unit">
                <span>单位</span>
                <span>{{second_info.unit}}</span>
            </li>
            <li v-if="second_info.attribute">
                <span>材质</span>
                <span>{{second_info.attribute}}</span>
            </li>
            <li v-if="second_info.boxBin">
                <span>箱规</span>
                <span>{{second_info.boxBin}}</span>
            </li>
            <li v-if="second_info.origin ">
                <span>产地</span>
                <span>{{second_info.origin}}</span>
            </li>
            <li v-if="second_info.length || second_info.width || second_info.height">
                <span>尺寸</span>
                <span>{{second_info.length}} cm X {{second_info.width}} cm X {{second_info.height}} cm</span>
            </li>
            <li v-if="second_info.weight">
                <span>毛重</span>
                <span>{{second_info.weight}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex';
    export default {
         computed : {
            ...mapState({
                second_info(state){
                        return state.detail.goods_second_info;
                },
            })
        },
    }
</script>
<style lang="scss">
    .secondInfo{
        
        
        display: flex;
        justify-content: center;
        ul{
            background:#f7f7f7;
            width:800px;
            padding: 20px 0;
            li{
                margin-left: 20px;
                font-size:14px;
                color:#666a73;
                line-height:24px;
                >span{
                    &:nth-of-type(1){
                        margin-right: 20px;
                    }
                    &:nth-of-type(2){

                    }
                }
            }
        }
    }
</style>