<template>
    <div class="searchOptions">
        <div>
            <span>分类</span>
            <ul>
                <!--<li v-on:click="handleSelect">品牌 ：3M</li>-->
                
                <li 
                    v-bind:key ="index+'1'"
                    v-for="(item,index) in productClass"
                    v-on:click="handleChangeCategory(item,index)">
                    <!--{{item}}-->
                    {{index}}
                </li>
            </ul>
        </div>
        <div>
            <span>品牌</span>
            <ul>
                  <li 
                    v-bind:key ="index"
                    v-for="(item,index) in brandList"
                    v-on:click="handleChangeBrand(item)">
                   {{item.name}}
                </li>
            </ul>
        </div>
        <div>
            <strong>您已选择</strong>
            <ul>
                <li >品牌 ：3M  x</li>
                <li v-if="text">关键字{{text}}  x</li>
                <li v-if=""
                    v-for="(item,index) in selectedKey"
                    v-on:click="handleChangeSearchKey(item)"
                    v-bind:key="index"
                    >
                    分类{{item}}  x
                </li>

                <li v-if="brand"
                    v-for="(item,index) in brand "
                    v-bind:key="index"
                    >品牌{{item.name}}  x</li>
                   
             
              
            </ul>
        </div>
    </div>
</template>

<script>

import {mapState,mapGetters} from 'vuex'
    export default {
        data(){
            return {
                category  : [],
                brands : []
            }
        },
        computed : {
                selectedKey(){
                   return  this.$store.state.search.search_key;
                },
                productClass(){
                    return this.$store.state.search.productClass;
                },
                brandList(){
                    return this.$store.state.search.brandList;
                },
                text(){
                    return this.$store.state.search.text;
                },
                brand(){
                    return this.$store.state.search.brand;
                },
                class3(){
                    return this.$store.state.search.class3;
                },
                ...mapGetters({
                     brandString : 'get_brand_string',
                     classString : 'get_class_string'
                })
               
            },
        
        methods:{
            handleChangeSearchKey(item){
                this.$store.commit('CHANGE_SELECT_KEY',item);
            },
            // 处理 品牌变动
            handleChangeBrand(item){
                console.log(({
                    text : this.text,
                    brand : this.brand,
                    class3 : this.class3
                }),"多数据")
                this.$store.commit('GET_BRANDS_BY_USER',item);
                this.$store.dispatch('search_by_user',{
                    text : this.text,
                    brand : this.brandString,
                    class3 : this.class3
                });
            },
            // 处理   三级分类变动
            handleChangeCategory(item,index){
                let string = "";
                item.map(i=>{
                    for(let k = 0 ;k<i.thirdClass.length;k++){       
                        string+=i.thirdClass[k].id+';'
                    }       
                })
                string = string.substring(0,string.length-1);
                this.$store.commit('GET_CATEGORY_BY_USER',string,{
                    name : index,
                    class3String : string
                });
                console.log(this.class3,'methods');
                this.$store.dispatch('search_by_user',{
                      text : this.text,
                    brand : this.brandString,
                    class3 : this.class3
                });
            }
        }


    }
</script>

<style lang="scss">
    .searchOptions {
        background:#ffffff;
        border:1px solid #e3e3e3;
        width:1158px;
     
        border-bottom: none;
        >div{
            
              display: flex;
                align-items: center;
            span{
             
                width: 60px;
                background:#f4f4f4;
                border:1px solid #e3e3e3;
                display: flex;
                justify-content: center;
                align-items: center;
                border-left :none;
                align-self: stretch;
              
            }
            ul{
                width: 1100px;
                height: 100%;
                border-bottom: 1px solid #e3e3e3;
                 display: flex;
                align-items: center;
                padding-left: 20px;
                flex-wrap: wrap;
                li{
                    height: 40px;
                    font-size:14px;
                    color:#666a73;
                    line-height:14px;
                    margin-right: 50px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
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
              padding: 12px 0;
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