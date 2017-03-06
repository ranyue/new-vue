<template>
    <li>
        <button type="submit" v-on:click="handleClick">{{value.specification}}</button>
       {{value}}
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
                this.$emit('selected_models_change', this.value.productId);
                console.log('selected_models_change',this.value.productId);
            } 
        }
    }
</script>