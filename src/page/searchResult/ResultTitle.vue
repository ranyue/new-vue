
<template>
    <div class="detailTitle">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{value.category1stName}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{value.category2stName}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{value.category3stName}}</el-breadcrumb-item>
            <el-breadcrumb-item >{{value.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
    export default {
        name:'resultTitle',
        props : {
            value : {
                type :Object,
                required : true,
                default :{

                },
                
            }
        },
        computed : {
            ...mapGetters({
                value : 'get_result_title'
            })
        }
    }
</script>

<style lang="scss">
    .detailTitle{
            margin-bottom: 32px;
            margin-top: 36px;
            span{
                font-size:14px;
                color:#3d3d3d;
               
            }
            .el-breadcrumb__item:last-child .el-breadcrumb__item__inner{
                    color: #f1496f;
            }
        
    }
</style>
