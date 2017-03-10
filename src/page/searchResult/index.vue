<template>
    <div id="result">
        <ResultTitle v-bind:value="product[0]"></ResultTitle>
        <div class="order">
          
            <OrderRule
                v-on:orderChange="handelChange"
                v-bind:currentIndex = "currentIndex"
            ></OrderRule>
        </div>
        <!--<div class="infoTitle">
            <ul>
                <li>商品信息</li>
                <li>价格</li>
                <li>操作</li>
            </ul>
        </div>-->
        <InfoTitle></InfoTitle>
        <div class="detailList">
            <ul>
                <li v-for="(item,index) in product" >
                    <DetailList v-bind:value="item" v-bind:key="index"></DetailList>
                </li>
            </ul>
        </div>
        <div class="pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
       
    </div>
</template>

<script>
import DetailList from './DetailList.vue';
import ResultTitle from './ResultTitle.vue';
import InfoTitle from './InfoTitle.vue';
import OrderRule from './OrderRule.vue';
import {mapState} from 'vuex';

    export default {
        data(){
            return {
                  currentPage: 1,
                  currentIndex :1,
                  order : {
                      up : "ASC",
                      down : "DESC"
                  }    
            }
        },
        computed : {
            ...mapState({
                 product(state){
                    return  state.searchResult.product;
                },
            })
        },
        components : {
            DetailList,
            ResultTitle,
            OrderRule,
            InfoTitle
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
            },
            getGoodsData(){
                //{ searchtype, start,num,class1, class2, class3 }
                this.$store.dispatch('get_search_result',{
                    searchtype :this.currentIndex,
                    start: "0",
                    num: "10",
                    class1 : "仪器",
                    class2 : "牙科治疗机",
                    class3 : "综合治疗机"
                });
            },
            handelChange(index){
                 this.currentIndex = index;
                 this.$store.dispatch('get_search_result',{
                    searchtype :this.currentIndex,
                    // order : this.currentIndex == 3 ? this.order : '',
                    start: "0",
                    num: "10",
                    class1 : "仪器",
                    class2 : "牙科治疗机",
                    class3 : "综合治疗机"
                });
            },
            handleOrderChange(e){
                this.currentIndex = e.target.getAttribute("data-index") ;
                // if(this.currentIndex == 3){
                //     if(this.order = "DESC"){
                //          this.order == "ASC" ;
                //     }else{
                //        this.order = "DESC"
                //     }
                // }
                console.log(this.order);
                 this.$store.dispatch('get_search_result',{
                    searchtype :this.currentIndex,
                    // order : this.currentIndex == 3 ? this.order : '',
                    start: "0",
                    num: "10",
                    class1 : "仪器",
                    class2 : "牙科治疗机",
                    class3 : "综合治疗机"
                });

               
                
            }
        },
        created : function(){
            this.getGoodsData();      
        }
    }
</script>
<style lang="scss">
    #result{
        .order{
           
        }
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
        .pagination {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            .el-pager li{
                color :#000;
                border-radius: 4px;
            }
            .el-pager li.active{
                background:#f1496f;
                border-color:#f1496f;
            }
        }
       
    }
</style>