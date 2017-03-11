<template>
    <div class="searchOptions">
        <div>
            <span>分类</span>
            <ul>
                <!--<li v-on:click="handleSelect">品牌 ：3M</li>-->
                 <li 
                    v-bind:key ="index"
                    v-for="(item,index) in value"
                    v-on:click="handleChangeSearchKey(item)">
                   {{item}}
                </li>
            </ul>
        </div>
        <div>
            <span>品牌</span>
            <ul>
                <!--<li  v-on:click="handleSelect">品牌 ：3M</li>-->

                 <li 
                    v-bind:key ="index"
                    v-for="(item,index) in value"
                    v-on:click="handleChangeSearchKey(item)">
                   {{item}}
                </li>
            </ul>
        </div>
        <div>
            <strong>您已选择</strong>
          
            <ul>
                <!--<li  v-on:click="handleCancel">品牌 ：3M  x</li>-->
                <li 
                    v-for="(item,index) in selectedKey"
                    v-on:click="handleChangeSearchKey(item)"
                    v-bind:key="index"
                    >
                    {{item}}x
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import {mapState} from 'vuex'
    export default {
        data(){
            return {
                value  : [111,2222,3333,4444]
            }
        },
        computed : {
                selectedKey(){
                   return  this.$store.state.search.search_key
                }
            },
        
        methods:{
            handleChangeSearchKey(item){
                this.$store.commit('CHANGE_SELECT_KEY',item);
            }
        }


    }
</script>

<style lang="scss">
    .searchOptions {
        background:#ffffff;
        border:1px solid #e3e3e3;
        width:1158px;
        height:120px;
        border-bottom: none;
        >div{
            height: 40px;
              display: flex;
                align-items: center;
            span{
                height: 100%;
                width: 60px;
                background:#f4f4f4;
                border:1px solid #e3e3e3;
                display: flex;
                justify-content: center;
                align-items: center;
                border-left :none;
              
            }
            ul{
                width: 1100px;
                height: 100%;
                border-bottom: 1px solid #e3e3e3;
                 display: flex;
                align-items: center;
                padding-left: 20px;
                li{
                    font-size:14px;
                    color:#666a73;
                    line-height:14px;
                    margin-right: 50px;
                         cursor: pointer;
                }
            }
            &:nth-of-type(1){
                display: flex;
                align-items: center;
                // justify-content: center;
                span{
                   
                }
                ul{

                }
            }
            &:nth-of-type(2){
                
            }
             &:nth-of-type(3){
                strong{
                    padding-left: 16px;
                    font-size:14px;
                    color:#666a73;
                    letter-spacing:0;
                    text-align:left;
                    width: 85px;                    
                }
                ul{
                    border-bottom: none;
                    display: flex;
                    align-items: center;
                    padding-left: 0;
                   
                    li{
                     background:#ffffff;
                    border:1px solid #f1496f;
                    height:28px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 8px 10px;
                    margin-right: 7px;
                    // cursor: pointer;

                        
                    }
                }
            }
        }
    }
</style>