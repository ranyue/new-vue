<template>
    <div class="searchInput">
        <input type="text" placeholder="请输入要查询的商品" ref="input">
        <button type="button" v-on:click="handleClick">查询</button>
    </div>
</template>
<script>
    export default {
        computed: {

        },
        methods: {
            handleClick (){
                // { searchtype = 5, text, start = 0, num = 10, tenantId }
                console.log(this.$refs.input.value);
                this.$store.dispatch('search_by_text',{
                    text : this.$refs.input.value,
                });
            }
        }


    }
</script>

<style lang="scss">
    .searchInput {
        margin-top: 36px;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        input{
            width: 525px;
            height: 35px;
            background:#ffffff;
            border:2px solid #f1496f;
            border-radius:4px; 
            outline:none;
            &:hover{
               
            }
        }
        button{
            background:#f1496f;
            border:1px solid #f1496f;
            width:63px;
            height:35px;
            margin-left: -6px;
        }
    }
</style>