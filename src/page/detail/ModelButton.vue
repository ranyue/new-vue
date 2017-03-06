<template>
    <li>
        <button type="button" v-bind:click="handleClick">{{value.specification}}</button>
       
    </li>
</template>
<script>
    export default {
       
        props : {
            value : {
                type : Object,
                required : true,
                default : {}
            }
        },
        methods : {
            handleClick : function(){
                // 选择或者取消对应的商品规格
                this.$emit('selected_modelsChange',{productId : this.value.productId});
            } 
        }
    }
</script>