
<template>
    <div class="detailTitle">
       
        <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{category[0]}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{category[1]}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{category[2]}}</el-breadcrumb-item>
            <el-breadcrumb-item >{{name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
   
    import {mapState} from 'vuex';
    export default {
        name:'detailtitle',
        computed: {
            category(){  
             return  this.$store.state.detail.category
            },
            name(){
                return this.$store.state.detail.goods_data.name
            }
           
        }, 
        mounted : function(){
        }
    }
</script>

<style lang="scss">
    .detailTitle{
      
            span{
                font-size:14px;
                color:#3d3d3d;
                text-align:left;
            }
            .el-breadcrumb__item:last-child .el-breadcrumb__item__inner{
                    color: #f1496f;
            }
        
            
            
           

    
      
      
       
    }
</style>
