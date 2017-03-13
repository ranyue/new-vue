<template>
    <div id="search">
        <div>
            <SearchInput></SearchInput>
        </div>
        <div>
            <Options></Options>
        </div>
        <div>
           <ul>
            
                <li v-for="(data,index) in product" v-bind:key="index">
                 
                    <DatailList v-bind:value="data"></DatailList>
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
import Options from './Options.vue';
import SearchInput from  './SearchInput.vue';
import DatailList from '../searchResult/DetailList.vue';
import mapState from 'vuex';
    export default {
        data(){
            return {
                currentPage : 1
            }
        },
        computed :{
            product(){
                return  this.$store.state.search.product
            }
        },
        components:{
            Options,
            SearchInput,
            DatailList
        },
        methods : {
            handleSizeChange(val) {
               
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
            },
            getCategory(){
                this.$store.dispatch('get_all_category');
            },
            getAllBrands(){
                this.$store.dispatch('get_all_brands');
            }
            
          
        },
        created: function(){
        
            this.getCategory();
            this.getAllBrands();
                console.log('11111')
        }
    }
</script>

<style lang="scss">
    #search{
        width:1180px;
        background:#f4f4f4;
        >div{
            &:nth-of-type(1){
             
            }
            &:nth-of-type(2){
              
            }
            &:nth-of-type(3){
                display: flex;
                align-items: center;
            }
            &:nth-of-type(4){
                display: flex;
                align-items: center;
            }
        }
    }
</style>